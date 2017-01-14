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
