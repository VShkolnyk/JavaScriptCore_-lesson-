function Robot(name, mess) {
    this.name = name;
    this.mess = mess;
    Robot.prototype.work = function () {
        console.log(`Я ${this.name} - я просто ${this.mess}`);
    }
}

function CoffeeRobot() {}
    CoffeeRobot.prototype = Object.create(Robot.prototype);
    CoffeeRobot.prototype.constructor = CoffeeRobot;


function RobotDancer() {}
    RobotDancer.prototype = Object.create(Robot.prototype);
    RobotDancer.prototype.constructor = RobotDancer;


function RobotCooker() {}
    RobotCooker.prototype = Object.create(Robot.prototype);
    RobotCooker.prototype.constructor = RobotCooker;


let robot = new Robot('Robot', 'працюю');
let coffeeRobot = new Robot('CoffeeRobot', 'варю каву');
let robotDancer = new Robot('RobotDancer', 'танцюю')
let robotCooker = new Robot('RobotCooker', 'готую');
robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

let ROBOTS = [robot, coffeeRobot, robotDancer, robotCooker];

for (let i = 0; i<ROBOTS.length; i++){
    ROBOTS[i].work();
}