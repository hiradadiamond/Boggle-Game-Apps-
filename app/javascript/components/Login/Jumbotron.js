import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
 import styled from 'styled-components'
import game from './game.png'
import { Route } from 'react-router-dom'
// import './Jumbotron.css'


const Section = styled.section`
  background-color:#eee;
  min-height:100%;
  padding:100px 0;

`

const Header = styled.h1`
  color: blue;
  font-weight: 700;
  font-size:40px;
  line-height:52px;
  text-align:center;

`

const Button = styled.a`
  display:inline-block;
  text-decoration: none;
  background-color:blue;
  cursor:pointer;
  border-radius: 0;
  background: #fff;
  color: #fff !important;
  padding: 10px 20px;
  font-size: 18px;


`

class Jumbotron extends Component{
  constructor(props) {
            super();
            this.state = {
                name: ''
            }
        }
  styles = {
    body:{
      textAlign:'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        //maxWidth: '700px',
        flexDirection: 'column',
    },
    formEle: {
        backgroundColor:'#fff',
        display: 'flex',
        margin: '0px 20px 20px 20px'
    },
    Submit:{
      backgroundColor:'blue',
      margin: '0px 20px 20px 20px',
      display: 'flex',
      display: 'flex',
      textAlign:'center',
      flexWrap: 'wrap',
      flex: 1,
      flexDirection: 'column',

    }
};
   handleChange(e) {
        this.setState({ name: e.target.value })
    }
    playGame(history) {
        if (this.state.name.length !== 0) {
             history.push('/game/' + this.state.name);
            //history.push('/game');


        }
        else {
            alert("Please Enter Your Name");
        }
    }

render(){
  return(
    <Section className="home-section">
     <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-5">
          <div className="pt-4 mt-4">
           <Header>Boggle Game Challenge</Header>
          <br/>

           <form noValidate autoComplete="off" style={this.styles.container}>
                            <TextField
                                id="outlined-name"
                                label="Your Name"
                                style={this.styles.formEle}
                                value={this.state.name}
                                onChange={(e) => this.handleChange(e)}
                                margin="normal"
                                variant="outlined"
                            />

                            <Route render={({ history }) => (
                                <Button
                                    textAlign="center"
                                    color="primary"
                                    type="submit"
                                    style={this.styles.Submit}
                                    onClick={() => this.playGame(history)}
                                >
                                    Play
                                </Button>
                            )} />
                        </form>

          </div>
        </div>
        <div className="col col-sm-12 col-md-7">
          <div className="pt-2 mt-5">
            <img height="375" width="500" src={game} alt="This is a sample"/>
          </div>
        </div>
      </div>
     </div>

    </Section>
  )
 }
}

export default Jumbotron
