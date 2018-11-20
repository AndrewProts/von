var template = {
    styles: {
        width: '200px',
        height: '300px',
        backgroundColor: 'white',

    },
    children: [
        {
            styles: {
                width: '100px',
                height: '200px',
                backgroundColor: 'yellow',
            },
            children: [
                {
                    styles: {
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'green',
                    },
                    children: []
                }
            ]
        },
        {
            styles: {
                width: '60px',
                height: '80px',
                backgroundColor: 'red',
            },
            children: []
        }
    ]
}

new Von({
    el: 'von',
    template: template,
    width: '100vw',
    height: '100vh'
})
