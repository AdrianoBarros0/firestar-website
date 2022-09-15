class SlideHome {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        console.log(this.slide);
    }
}

new SlideHome('slide')