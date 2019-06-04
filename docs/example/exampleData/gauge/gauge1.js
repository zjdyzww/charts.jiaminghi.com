const option1 = {
  title: {
    text: '剩余油量表'
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      axisLabel: {
        formatter: '{value}%'
      }
    }
  ]
}

const option2 = {
  title: {
    text: '剩余油量表'
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 89 } ],
      axisLabel: {
        formatter: '{value}%'
      }
    }
  ]
}

export default [option1, option2]