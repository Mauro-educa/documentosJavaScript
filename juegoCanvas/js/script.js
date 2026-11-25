const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.addEventListener("pointermove", (event) => {
  if (paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});
const baseWallHitbox = {
    left: -Infinity,
    right: Infinity,
    top: -Infinity,
    bottom: Infinity,
};

const colliders = [
    { hitbox: { ...baseWallHitbox, right: 0 } },
    { hitbox: { ...baseWallHitbox, left: canvas.width } },
    { hitbox: { ...baseWallHitbox, bottom: 0 } },
    { hitbox: { ...baseWallHitbox, top: canvas.height } },
];

requestAnimationFrame(update);

function update(timestamp) {

    // ball.move(dt);

    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    moveBall(dt);
    handleWallCollisions(ball, canvas.width, canvas.height);
    requestAnimationFrame(update);
}


class GameObject {
    asset;
    ctx;
    size = { w: undefined, h: undefined };
    pos = { x: 0, y: 0 };
    origin = { x: 0.5, y: 0.5 };
    constructor(url, ctx) {
        this.asset = new Image();
        this.asset.src = url;
        this.ctx = ctx;
    }
    async preload() {
        await this.asset.decode();
        if (this.size.w === undefined) {
            this.size.w = this.asset.width;
            this.size.h = this.asset.height;
        }
    }
    get hitbox() {
        const left = this.pos.x - this.size.w * this.origin.x;
        const top = this.pos.y - this.size.h * this.origin.y;
        return {
            left,
            right: left + this.size.w,
            top,
            bottom: top + this.size.h,
        };
    }
    draw() {
        const { left, top } = this.hitbox;
        this.ctx.drawImage(this.asset, left, top);
    }
    onCollide() { }
}

class Ball extends GameObject {
    pos = { x: 50, y: 50 };
    vel = { x: 330, y: 150 };
    move(dt) {
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
    }
    onCollide({ x, y }) {
        if (x) {
            this.vel.x = -this.vel.x;
        }
        if (y) {
            this.vel.y = -this.vel.y;
        }
    }
}
class Paddle extends GameObject {
    origin = { x: 0.5, y: 1 };
    constructor(url, ctx) {
        super(url, ctx);
        this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
    }
}

function moveBall(dt) {
    while (dt > 0) {
        // Evitar activar el getter repetidamente
        const ballHitbox = ball.hitbox;
        let hitTime = dt;
        let hitX = null;
        let hitY = null;
        let contacts = [];

        for (const collider of colliders) {
            const hit = getCollision(ballHitbox, ball.vel, collider.hitbox, hitTime);
            if (hit === null) {
                continue;
            }
            if (hit.time < hitTime) {
                hitX = null;
                hitY = null;
                contacts = [];
            }
            hitTime = hit.time;
            hitX = hit.x ?? hitX;
            hitY = hit.y ?? hitY;
            contacts.push({ collider, hit });
        }

        ball.move(hitTime);
        dt -= hitTime;

        if (contacts.length === 0) {
            break;
        }
        // Ajustar la posición al punto de contacto para evitar errores de coma flotante
        if (hitX !== null) {
            ball.pos.x = hitX + ball.size.w / 2;
        }
        if (hitY !== null) {
            ball.pos.y = hitY + ball.size.h / 2;
        }

        ball.onCollide({ x: hitX !== null, y: hitY !== null });
        for (const { collider, hit } of contacts) {
            collider.onCollide?.({ x: hit.x !== null, y: hit.y !== null });
        }
    }
}



const ball = new Ball("img/ball.png", ctx);
const paddle = new Paddle("img/paddle.png", ctx);
colliders.push(paddle);
let lastTimestamp = null;
Promise.all([ball].map((obj) => obj.preload())).then(() =>
    requestAnimationFrame(update),
);
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() =>
    requestAnimationFrame(update),
);

