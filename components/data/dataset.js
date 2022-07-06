const defaultDataset = {
    "init": {
        answers: [
            {content: "カラー占いしたい", nextId: "color"},
            {content: "キャリアについて相談したい", nextId: "consultant"},
            {content: "トレックスついて知りたい", nextId: "community"},
            {content: "お付き合いしたい", nextId: "dating"},
        ],
        question: "こんにちは！🦕マスコットのTレックスくんだよ、今日は参加ありがとう！ご用件はなんでしょうか？",
    },
    "color": {
        answers: [
            {content: "和食", nextId: "japan"},
            {content: "洋食", nextId: "europ"},
            {content: "実は中華大好き！", nextId: "china"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "和食派ですか洋食派ですか？",
    },    
    "japan": {
        answers: [
            {content: "春", nextId: "green_japan"},
            {content: "夏", nextId: "pink_japan"},
            {content: "秋", nextId: "orange_japan"},
            {content: "冬", nextId: "blue_japan"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "どの季節がお好きでしょうか？",
    },
    "europ": {
        answers: [
            {content: "春", nextId: "green"},
            {content: "夏", nextId: "pink"},
            {content: "秋", nextId: "orange"},
            {content: "冬", nextId: "blue"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "どの季節がお好きでしょうか？",
    },
    "china": {
        answers: [
            {content: "春", nextId: "green_china"},
            {content: "夏", nextId: "pink_china"},
            {content: "秋", nextId: "orange_china"},
            {content: "冬", nextId: "blue_china"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "どの季節がお好きでしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
    },
    "consultant": {
        answers: [
            {content: "ツイッターを見る", nextId: "https://twitter.com/findBestProject"},
            {content: "トレックスについて知りたい", nextId: "community"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "トレックス人事は普段からキャリアについて発信しています。また、会場でも相談に乗っています、気軽にご質問ください。",
    },
    "community": {
        answers: [
            {content: "どんな活動をしているの？", nextId: "community_activity"},
            {content: "応募したい", nextId: "https://lp-recruitment-sales.trex-group.com/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "トレックスは来年で創業20年を迎えます！🎉IT業界への転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
    },
    "community_activity": {
        answers: [
            {content: "さらに詳細を知りたい", nextId: "https://www.trex-group.com/company/vision/"},
            {content: "応募したい", nextId: "https://lp-recruitment-sales.trex-group.com/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "トレックスでは「共栄」大切にしております。\nシステムの設計・開発から運用サポート、保守・メンテナンスまで、一貫したサービス提供を通し、関わる方々と共にサービスを創り、成長し、豊かで快適な社会づくりを行っています。",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/findBestProject"},
            {content: "好きなアイスは🍨？", nextId: "favourite"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DMしてください😘",
    },
}

export default defaultDataset