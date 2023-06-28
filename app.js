const app = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            color: '#8d81f3',
            copiedValues: {}
        }
    },
    computed: {
        box_classes() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)`,
                backgroundColor: this.color
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.color = '#8d81f3'
        },
        async copy() {
            let text = `{
                "perspective": ${this.perspective},
                "rotateX": ${this.rotateX},
                "rotateY": ${this.rotateY},
                "rotateZ": ${this.rotateZ},
                "color": "${this.color}"
            }`;
            await navigator.clipboard.writeText(text)
            alert('CSS Copied to Clipboard!')
        },
        async paste() {
            let text = await navigator.clipboard.readText()
            console.log(JSON.parse(text));
            let values = JSON.parse(text)
            this.perspective = values.perspective
            this.rotateX = values.rotateX
            this.rotateY = values.rotateY
            this.rotateZ = values.rotateZ
            this.color = values.color

            alert('CSS successfully pasted')
        }
    }
}).mount('#app')