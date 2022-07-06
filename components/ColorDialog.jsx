import React, {useState, useCallback, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ColorDialog = (props) => {

    return (
        <Dialog className='dialog' open={props.open} onClose={props.handleClose}>
            <DialogTitle>今日のラッキーカラー</DialogTitle>
            <DialogContent>
                <img src={props.color} alt="color" className="color" />
                <div>{props.text}</div>
                <div>今日は話せて嬉しいです、良い一日を🍨</div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    戻る
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default ColorDialog