import fs from 'fs';
import https from 'https';
import path from 'path';

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

const logos = [
    // Partners (using clearbit where possible or general endpoints)
    { url: 'https://logo.clearbit.com/qlik.com', dest: 'public/images/partners/qlik.png' },
    { url: 'https://logo.clearbit.com/talend.com', dest: 'public/images/partners/talend.png' },
    { url: 'https://logo.clearbit.com/microsoft.com', dest: 'public/images/partners/microsoft.png' },
    { url: 'https://logo.clearbit.com/aws.amazon.com', dest: 'public/images/partners/aws.png' },

    // Testimonials
    { url: 'https://logo.clearbit.com/commonwealthcarealliance.org', dest: 'public/images/testimonials/cca.png' },
    { url: 'https://logo.clearbit.com/hil.in', dest: 'public/images/testimonials/hil.png' }, // HIL Limited
    { url: 'https://logo.clearbit.com/mhanet.com', dest: 'public/images/testimonials/mha.png' }, // Assuming this MHA
];

async function run() {
    for (const logo of logos) {
        try {
            await download(logo.url, logo.dest);
            console.log(`Downloaded ${logo.dest}`);
        } catch (e) {
            console.error(`Failed to download ${logo.url}: ${e}`);
        }
    }
}

run();
