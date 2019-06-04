const option1 = {
  radar: {
    indicator: [
      { name: '西峡', max: 300 },
      { name: '周口', max: 300 },
      { name: '南阳', max: 300 },
      { name: '驻马店', max: 300 },
      { name: '郑州', max: 300 },
      { name: '洛阳', max: 300 }
    ],
    polygon: true,
    splitArea: {
      show: true
    }
  },
  series: [
    {
      type: 'radar',
      data: [111, 256, 178, 152, 266, 132]
    }
  ]
}

const option2 = {
  radar: {
    indicator: [
      { name: '西峡', max: 300 },
      { name: '周口', max: 300 },
      { name: '南阳', max: 300 },
      { name: '驻马店', max: 300 },
      { name: '郑州', max: 300 },
      { name: '洛阳', max: 300 }
    ],
    polygon: true,
    splitArea: {
      show: true
    }
  },
  series: [
    {
      type: 'radar',
      data: [223, 189, 214, 265, 178, 155]
    }
  ]
}

export default [option1, option2]