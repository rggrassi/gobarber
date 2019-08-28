export default function(sequelize, DataTypes) {
    const File = sequelize.define('File', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        url: { 
            type: DataTypes.VIRTUAL,
            get() {
                return `{$process.env.APP_URL}/files/${this.path}`
            }
        }
    })

    return File;
}