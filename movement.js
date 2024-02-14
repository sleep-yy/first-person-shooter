function velocity(){
    for (let len=scene.children.length,i=0;i<len;i++){
        // Object.values(scene.children[i].position)
        // scene.children[i].position.x += scene.children[i].velocity
        let posVals = Object.values(scene.children[i].position), veloVals = Object.values(scene.children[i].position);
        Object.values(scene.children[i].position) += Object.values(scene.children[i].velocity);
        let updatedPos = posVals.map(function (nums,index){return num + veloVals[index]});
        Object.values(scene.children[i].position) = updatedPos;
        for (let length = Object.values(scene.children[i].position),j=0;j<length;i++){
            scene.
        }

    }
}