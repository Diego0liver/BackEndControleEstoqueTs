import { Model, DataTypes } from "sequelize"
import { sequelize } from './mysql'

export interface Types extends Model {
    id: number
    titulo: string
    categoria: string
    entrada: number
    saida: number
    total: number
    minimo: number
}

export const Notas = sequelize.define<Types>('estoque',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull:false
    },
    entrada:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    saida:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    total:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    minimo:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
},{
    tableName: 'estoque',
    timestamps: false
})