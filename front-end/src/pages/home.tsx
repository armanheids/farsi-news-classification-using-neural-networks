import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [newText, setNewText] = useState('');
    const [newAlertData, setAlertData] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
    }, []);

    const handleTextSubmit = async () => {
        if (!newText) {
            return
        }

        const newTestData = {
            text: newText,
        }

        const response = await axios.post('http://localhost:5000', newTestData);
        console.log(response)

        setAlertData(response.data)
        setIsDialogOpen(true)
    }

    return (
        <Container maxWidth="sm">
            <Typography marginTop={2} variant="h4" align="center" gutterBottom>
                سامانه دسته‌بندی محتوای خبری
            </Typography>
            <TextField
                label="متن"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />


            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <DialogTitle>دسته‌بندی محتوا</DialogTitle>
                <DialogContent>
                    <Typography margin={10} variant="h4" align="center" gutterBottom>
                        {newAlertData}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDialogOpen(false)} color="secondary">
                        لغو
                    </Button>
                </DialogActions>
            </Dialog>


            <Typography marginTop={2} variant="h6" align="center" gutterBottom>
                <Button variant="contained" color="primary" onClick={handleTextSubmit}>
                    ارسال
                </Button>
            </Typography>
        </Container>
    );
};

export default Home;
