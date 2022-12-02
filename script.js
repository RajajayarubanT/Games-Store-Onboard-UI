

let drag_ScrollVertical = (id) => {
    if (!id) return
    const container = document.getElementById(id);

    let startY;
    let startX;
    let scrollLeft;
    let scrollTop;
    let isDown;

    container.addEventListener('mousedown', e => mouseIsDown(e));
    container.addEventListener('mouseup', e => mouseUp(e))
    container.addEventListener('mouseleave', e => mouseLeave(e));
    container.addEventListener('mousemove', e => mouseMove(e));

    function mouseIsDown(e) {
        isDown = true;
        startY = e.pageY - container.offsetTop;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        scrollTop = container.scrollTop;
    }
    function mouseUp(e) {
        isDown = false;
    }
    function mouseLeave(e) {
        isDown = false;
    }
    function mouseMove(e) {
        if (isDown) {
            e.preventDefault();
            //Move vertcally
            const y = e.pageY - container.offsetTop;
            const walkY = y - startY;
            container.scrollTop = scrollTop - walkY;

            //Move Horizontally
            const x = e.pageX - container.offsetLeft;
            const walkX = x - startX;
            container.scrollLeft = scrollLeft - walkX;

        }
    }
}


let Image3DHover = (id) => {

    let els = document.querySelectorAll(`.${id}`);

    for (const el of els) {

        const height = el.clientHeight;
        const width = el.clientWidth;

        el.addEventListener("mousemove", handleMove);

        function handleMove(e) {

            const xVal = e.layerX;
            const yVal = e.layerY;
            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);
            const string =
                "perspective(500px) rotateX(" +
                xRotation +
                "deg) rotateY(" +
                yRotation +
                "deg)";

            el.style.transform = string;
        }
        el.addEventListener("mouseout", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });

        el.addEventListener("mousedown", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });

        el.addEventListener("mouseup", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });
    }
}
