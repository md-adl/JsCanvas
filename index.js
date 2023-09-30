const canvas = document.getElementById('mirrorCanvas');
const ctx = canvas.getContext('2d');

const mirrorCenterX = canvas.width / 2;
const mirrorCenterY = canvas.height / 2;
const mirrorRadius = 80;
const objectHeight = 20;
const objectDistance = 250;
const focalLength = 180;
const focalPointX = mirrorCenterX + focalLength;

// Draw the concave mirror
ctx.beginPath();
ctx.arc(mirrorCenterX, mirrorCenterY, mirrorRadius, 0, Math.PI * 2);
ctx.stroke();

// Draw the optical axis
ctx.moveTo(mirrorCenterX, 0);
ctx.lineTo(mirrorCenterX, canvas.height);
ctx.stroke();

// Draw the object (pencil)
const objectTopY = mirrorCenterY - objectHeight / 2;
const objectBottomY = mirrorCenterY + objectHeight / 2;
ctx.fillRect(mirrorCenterX - objectDistance, objectTopY, 5, objectHeight);

// Calculate the two marginal rays
const rayTopY = mirrorCenterY - 2;
const rayBottomY = mirrorCenterY + 2;

// Ray 1 (from the top of the object)
ctx.moveTo(mirrorCenterX - objectDistance, objectTopY);
ctx.lineTo(focalPointX, rayTopY);
ctx.stroke();

// Ray 2 (from the bottom of the object)
ctx.moveTo(mirrorCenterX - objectDistance, objectBottomY);
ctx.lineTo(focalPointX, rayBottomY);
ctx.stroke();

// Draw the focal point (F)
ctx.beginPath();
ctx.arc(focalPointX, mirrorCenterY, 5, 0, Math.PI * 2);
ctx.fill();
ctx.fillText('F', focalPointX + 10, mirrorCenterY - 10);

// Label real/virtual image
ctx.font = '16px Arial';
ctx.fillText('Real Image', focalPointX + 20, mirrorCenterY + 20);
ctx.fillText('Virtual Image', mirrorCenterX - objectDistance - 100, mirrorCenterY + 20);