import figlet from 'figlet';

figlet('Tho Vicheka', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});



