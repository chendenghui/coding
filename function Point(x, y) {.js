function Point(x, y) {
    this.x = x;
    this.y = y;
    this.z = z;
}
Point.prototype = {
    print: function () { console.log(this.x, this.y, this.z); }
};
var p = new Point(10, 20, 30);
p.print(); // 10 20 30