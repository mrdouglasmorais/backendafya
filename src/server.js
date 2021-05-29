import app from './app';
import express from 'express'

app.use(express.json())
app.listen(3000);