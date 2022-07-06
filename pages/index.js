import Head from 'next/head'
import React, {useState, useCallback, useEffect} from 'react';
import defaultDataset from '../components/data/dataset'
import {AnswersList, Chats, Loading, ColorDialog} from '../components/index'

export default function Home() {
  const [answers, setAnswers] = useState([]);            // 回答コンポーネントに表示するデータ
  const [chats, setChats] = useState([]);                // チャットコンポーネントに表示するデータ
  const [currentId, setCurrentId] = useState('init');    // 現在の質問ID
  const [dataset, setDataset] = useState(defaultDataset);            // 質問と回答のデータセット
  const [open, setOpen] = useState(false);      
  const [color, setColor] = useState('');  
  const [text, setText] = useState('');   
  
  // 問い合わせフォーム用モーダルを開くCallback関数
  const handleOpen = useCallback(() => {
      setOpen(true)
  },[setOpen]);

  // 問い合わせフォーム用モーダルを閉じるCallback関数
  const handleClose = useCallback(() => {
      setOpen(false)
  },[setOpen]);

  // 新しいチャットを追加するCallback関数
  const addChats = useCallback((chat) => {
      setChats(prevChats => {
          return [...prevChats, chat]
      })
  },[setChats]);

  // 次の質問をチャットエリアに表示する関数
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
      // 選択された回答と次の質問をチャットに追加
      addChats({
          text: nextDataset.question,
          type: 'question'
      });

      // 次の回答一覧をセット
      setAnswers(nextDataset.answers)

      // 現在の質問IDをセット
      setCurrentId(nextQuestionId)
  }

  // 回答が選択された時に呼ばれる関数
  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
      switch (true) {
          // カラーが選択された場合
          //和食
          case (nextQuestionId === 'green_japan'):
            setColor('/color/green_japan.png');
            setText('抹茶');
            handleOpen();
            break;

          case (nextQuestionId === 'pink_japan'):
            setColor('/color/pink_japan.png');
            setText('大納言あずき');
            handleOpen();
            break;

          case (nextQuestionId === 'orange_japan'):
            setColor('/color/orange_japan.png');
            setText('黒豆きんとんバニラ');
            handleOpen();
            break;

          case (nextQuestionId === 'blue_japan'):
            setColor('/color/blue_japan.png');
            setText('北極グマ　ポーラベア');
            handleOpen();
            break;

          //洋食
          case (nextQuestionId === 'green'):
            setColor('/color/green.png');
            setText('マスクメロン');
            handleOpen();
            break;

          case (nextQuestionId === 'pink'):
            setColor('/color/pink.png');
            setText('べリーベリーストロベリー');
            handleOpen();
            break;

          case (nextQuestionId === 'orange'):
            setColor('/color/orange.png');
            setText('オレンジソルベ');
            handleOpen();
            break;

          case (nextQuestionId === 'blue'):
            setColor('/color/blue.png');
            setText('クリームソーダ');
            handleOpen();
            break;

          //中華
          case (nextQuestionId === 'green_china'):
            setColor('/color/green_china.png');
            setText('ピスタチオアーモンド');
            handleOpen();
            break;

          case (nextQuestionId === 'pink_china'):
            setColor('/color/pink_china.png');
            setText('チェリージュビリー');
            handleOpen();
            break;

          case (nextQuestionId === 'orange_china'):
            setColor('/color/orange_china.png');
            setText('ジャモカアーモンドファッジ');
            handleOpen();
            break;

          case (nextQuestionId === 'blue_china'):
            setColor('/color/blue_china.png');
            setText('サンセットサーフィン');
            handleOpen();
            break;
            
          case (nextQuestionId === 'favourite'):
            setColor('/color/mint.png');
            setText('チョコミント\n大好き💛');
            handleOpen();
            break;

          // リンクが選択された時
          case /^https:*/.test(nextQuestionId):
              const a = document.createElement('a');
              a.href = nextQuestionId;
              a.target = '_blank';
              a.click();
              break;

          // 選択された回答をchatsに追加
          default:
              // 現在のチャット一覧を取得
              addChats({
                  text: selectedAnswer,
                  type: 'answer'
              })

              setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 750)
              break;
      }
  },[answers]);

  // 最初の質問をチャットエリアに表示する
  useEffect(() => {
    displayNextQuestion(currentId, dataset[currentId])
  }, []);

  // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
  useEffect(() => {
      const scrollArea = document.getElementById('scroll-area');
      if (scrollArea) {
          scrollArea.scrollTop = scrollArea.scrollHeight;
      }
  });

  return (
    <div className="container">
      <Head>
        <title>本日のラッキーカラー</title>
        <meta name="description" content="とある会場に行けないエンジニアの埋め合わせ"/>
        <meta property="og:type" content="website" />
        <meta property='og:image' content="/icon.png" />
        <meta property='og:title' content="株式会社トレックス | 本日のラッキーカラー" />
        <meta property='og:description' content="とある会場に行けないエンジニアの埋め合わせ" />
        <meta property='og:url' content="https://lp-recruitment-sales.trex-group.com/"/>
        <meta name='twitter:site' value="@Trex2003" />
        <meta name='twitter:card' value="summary" />
        <meta name= 'twitter:image' value="/icon.png" />
        <meta name= 'twitter:description' value="とある会場に行けないエンジニアの埋め合わせ" />
        <link rel="icon" href="/tab.ico" />
      </Head>

      <section className='c-section'>
        <div className='c-box'>
          {(Object.keys(dataset).length === 0) ? (
              <Loading />
          ) : (
              <>
                  <Chats chats={chats} />
                  <AnswersList answers={answers} select={selectAnswer}/>
              </>
          )}
          <ColorDialog open={open} handleOpen={handleOpen} handleClose={handleClose} color={color} text={text}/>
        </div>
      </section>

      <footer>
        <a
          href="https://www.trex-group.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/trex.png" alt="Trex" className="logo" />
        </a>
      </footer>
    </div>
  )
}
