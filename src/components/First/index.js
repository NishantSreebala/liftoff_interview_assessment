import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { Pie, Doughnut } from 'react-chartjs-2';
//import Second from '../Second'
class First extends React.Component {
  state = {
    user: [
      {
        name: "",
        value: "",
        from_time: "",
        to_time: ""
      }
    ],
    show: "false",
    users: [],
    data: [],
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [100],

      }
    ]

  };
  handleFieldChange = (property, value, propertyobject) => {
    const { user } = this.state;
    this.setState({
      ...this.state,
      [propertyobject]: {
        ...this.state[propertyobject],
        [property]: value
      }
    });
  };

  handleView = () => {
    const { show } = this.state;
    this.setState({
      show: true
    });
  };
  handleSubmit = () => {
    const { user, users, datasets } = this.state;
    const { name, value, from_time, to_time } = user;
    users.push(user);
    datasets[0].data.push(value);
    this.setState({
      ...this.state,
      name: "",
      value: "",
      from_time: "",
      to_time: ""
    });
  };
  render() {
    const { user, users, val, show,datasets} = this.state;
    const { handleView, handleSubmit, handleFieldChange } = this;
    //console.log("Hi",this.state.users[0].value);
    //console.log("Pv",val);
    //console.log("DS",this.state.datasets)



    return (
      <Grid style={{ marginLeft: "5%" }}>
        <p>LIFTOFF Assignment</p>
        <Grid container>
          <Grid item md={6} style={{ marginRight: "5%" }}>
            <TextField
              id="outlined-name"
              label="Name"
              margin="normal"
              variant="outlined"
              value={user.name}
              onChange={e => {
                handleFieldChange("name", e.target.value, "user");
              }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              type="number"
              label=" Value"
              value={user.value}
              onChange={e => {
                handleFieldChange("value", e.target.value, "user");
              }}
              inputProps={{ min: "1", max: "100", step: "1" }}
            />
          </Grid>

          <Grid
            item
            md={6}
            style={{ marginTop: "5%", marginLeft: "", marginRight: "5%" }}
          >
            <TextField
              id="date"
              helperText="From Date"
              type="date"
              value={user.from_time}
              onChange={e => {
                handleFieldChange("from_time", e.target.value, "user");
              }}
            />
          </Grid>

          <Grid item md={6} style={{ marginTop: "5%" }}>
            <TextField
              id="date"
              helperText="To Date"

              type="date"
              value={user.to_time}
              onChange={e => {
                handleFieldChange("to_time", e.target.value, "user");
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "5%", marginRight: "5%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleView}
          style={{ marginTop: "5%", maginLeft: "5%" }}
        >
          View Report
        </Button>

        <Grid style={{ marginLeft: "5%", marginTop: "2%" }}>
          {show === true &&
            users.map(option => (
              <table>
                <tr>
                  <Typography style={{ marginRight: "10%" }}>
                    <th>Name</th>{" "}
                  </Typography>
                  <th style={{ paddingLeft: '20px' }}>From_Time</th>{" "}
                  <th style={{ paddingLeft: '20px' }}>To_Time</th>{" "}
                  <th style={{ paddingLeft: '20px' }}>Value Selected</th>{" "}
                  <th>Value</th>
                </tr>
                <tr>
                  <td>{option.name}</td>

                  <td>{option.from_time}</td>
                  <td>{option.to_time}</td>
                  <td>{option.value}</td>
                  {/* <Second value= {this.state.val}/> */}
                  <div>

                    <Doughnut
                      data={this.state}

                      options={{
                        title: {
                          display: true,
                          text: '',
                          fontSize: 15
                        },
                        legend: {
                          display: true,
                          position: 'right'
                        }
                      }}
                    />
                  </div>
                </tr>
              </table>
            ))}
        </Grid>
      </Grid>
    );
  }
}
export default First;
