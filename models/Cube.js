class Cube {
    constructor({id, name, description, imageUrl, difficultyLevel}) {
        Object.assign(this, {id, name, description, imageUrl, difficultyLevel})
    }
}

module.exports = Cube