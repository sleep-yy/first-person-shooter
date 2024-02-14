function updatePosition(){
    for (let len=scene.children.length,i=0;i<len;i++){
        let child = scene.children[i];
        for (let j of ["x", "y", "z"]) child.position[j] += child.velocity[j];
    }
}

function updateVelocity(){
    
}