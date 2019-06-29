export default function(sequelize, DataType) {
  return sequelize.define('Keyword', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    adWords: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    links: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalResults: {
      type: DataType.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    source: {
      type: DataType.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'keywords',
  });
}
