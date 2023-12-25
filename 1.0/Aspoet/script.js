var selectedRow = 1;
var currentHighlightBottom = 90;
var targetHighlightBottom = 90;
var highlight = document.getElementById(`line-highlight`);

const turnLineBlack = line => {
    let num = line.id.split("-")[1];
    for (child of line.children) {
        child.style.color = "black";
    }

    targetHighlightBottom = 90-(num-1)*30;

    for (let i = 0; i < 4; i++) {
        if (num != i+1) {
            var lineOther = document.getElementById(`line-${i+1}`);
            for (child of lineOther.children) {
                child.style.color = "#c5b8b2";
            }
        }
    }

    requestAnimationFrame(() => {
        moveHighlight();
    })
}

const moveHighlight = () => {
    currentHighlightBottom += (targetHighlightBottom - currentHighlightBottom)*0.5;
    highlight.style.bottom = `${currentHighlightBottom}px`;

    if (Math.abs(currentHighlightBottom - targetHighlightBottom) > 1) {
        console.log(currentHighlightBottom - targetHighlightBottom)
        requestAnimationFrame(() => {
            moveHighlight();        
        });
    } else {
        currentHighlightBottom = targetHighlightBottom;
        highlight.style.bottom = `${currentHighlightBottom}px`;
    }
}

const turnLineGray = line => {
    for (child of line.children) {
        child.style.color = "#c5b8b2";
    }
}

const pxToDec = string => {
    return parseInt(string.substr(0, string.length-2));
}