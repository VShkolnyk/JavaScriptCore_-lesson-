function Robot(name, mess) {
    let self = this;
    self.name = name;
    self.mess = mess;
    self.work = function (name, mess) {
        console.log(`Я ${self.name} - я просто ${self.mess}`)
    }
}

function CoffeeRobot(name, mess) {
    Robot.call(this);
}

function RobotDancer(name, mess) {
    Robot.call(this);
}

function RobotCooker(name, mess) {
    Robot.call(this);
}

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
