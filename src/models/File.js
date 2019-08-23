export default function(sequelize, DataTypes) {
    const File = sequelize.define('File', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        url: { 
            type: DataTypes.VIRTUAL,
            get() {
                return `http://localhost:3333/files/${this.path}`
            }
        }
    })

    return File;
}