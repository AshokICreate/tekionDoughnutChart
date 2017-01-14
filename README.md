Getting Started

clone the repository and run npm install.

Example

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
