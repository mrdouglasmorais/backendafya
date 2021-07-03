module.exports = {
  dialect: 'postgres',
  host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
  username: 'ptnzvkfjmuhdmm',
  password: '1bc61e4e38b8bfd1e6068d2f2b4225044eb3bc66c80da8657647735469c1d655',
  database: 'd2mt8jhebjl1ao',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}