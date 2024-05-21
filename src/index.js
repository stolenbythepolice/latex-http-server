import express from 'express';
import cors from 'cors';
import { Tex2Svg, math } from "tex2svg";

const app = express();
const port = 3001;

app.use(cors());

app.get('/latex', async (req, res) => {
    const formula = req.query.tex;
    const preamble = req.query.preamble;

    if (!formula) {
        return res.status(400).send('Missing formula parameter');
    }

    const preambleArray = Array.isArray(preamble) ? preamble : preamble ? preamble.split('\n') : [];

    const compiler = new Tex2Svg({
        tmpdir: "/tmp",
        precision: 2,
        inline: true,
        minifyids: false,
        prefixids: false,
        preamble: preambleArray,
        dvisvgm: "dvisvgm",
    });

    try {
        const svgArray = await compiler.compile([math(formula, true)]);
        const svg = svgArray[0];
        res.set('Content-Type', 'image/svg+xml');
        res.send(svg);
    } catch (error) {
        console.error('Error compiling LaTeX formula:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
