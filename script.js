class Shape {
    draw() {
        console.log('Рисуем фигуру.');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Рисуем Прямоугольник.');
    }
} 

class Circle extends Shape {
    draw() {
        console.log('Рисуем Круг');
    }
}

const figures = [
    new Rectangle(),
    new Circle(),
];

for (let i = 0; i < figures.length; i++) {
    figures[i].draw();
}