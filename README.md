A `<Doughnut>` component for react-native.

##Getting Started

```shell
clone the repository and run npm install.
```

##Landsacpe

![Demo](https://github.com/AshokICreate/tekionDoughnutChart/blob/master/images/landscape.png)

##Portrait

![Demo](https://github.com/AshokICreate/tekionDoughnutChart/blob/master/images/portrait.png)

##Example


```jsx
Cars: [
              { "Status": "Availability", "Value": 111},
              { "Status": "Cars Out", "Value": 849},
              { "Status": "Cars Returning Today", "Value": 178},
]
```

```jsx
colors: [
  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
  "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"
]
```

```jsx
<Doughnut
            width={width}
            height={height}
            doughnutWidth={150}
            doughnutHeight={150}
            colors={Theme.colors}
            data={data.Cars}
            dimention={"Status"}
            meassure={"Value"}
           />
```

##propTypes

```jsx
Doughnut.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  doughnutWidth: React.PropTypes.number.isRequired,
  doughnutHeight: React.PropTypes.number.isRequired,
  colors: React.PropTypes.array.isRequired,
  data: React.PropTypes.any.isRequired,
  dimention: React.PropTypes.string.isRequired,
  meassure: React.PropTypes.string.isRequired
};
```
