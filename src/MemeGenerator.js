import React from 'react'

const up = {
    position : "absolute",
    top : "450px",
    color:"white",
    fontSize : "30px",
    fontWeight : "100",
    fontFamily : "arial",
    align : "center",
    margin : "00px 550px 30px 550px",
    padding : "-200px 20px 20px 20px",
    width : "400px",
    height  :"200px",

    fontSize: "1em",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow:
        "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000"


}
const down = {
    position : "absolute",
    bottom : "-200px",
    color:"white",
    fontSize : "30px",
    fontWeight : "100",
    fontFamily : "arial",
    align : "center",
    margin : "00px 500px -50px 500px",
    padding : "200px 50px 00px 50px",
    fontSize: "1em",
    height : "200px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow:
        "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000"
}


const divStyle = {

    background : "#54abcd",
    color : "yellow",
    
    fontSize : "30px",
    fontFamily : "arial"

}

export default class MemeGenerator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data  : "",
            topText : "",
            bottomText : ""
        }
        this.fetchMemes = this.fetchMemes.bind(this)
        this.addText = this.addText.bind(this)
    }

    fetchMemes(){
        const x = Math.floor((Math.random() * 99) + 0);
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data =>(
                data['data']['memes'][x]
                )
            ).then(newData => {
                this.setState({
                    data : newData

                })
                console.log(newData)
            })
    }

    addText(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        
        return(
                <div align="center" style = {divStyle} >
                    <h1> MemeGenerator App </h1>
                    <button  style = {{outline  : "none",fontSize : "30px",height:"50px" ,border : "0px", borderRadius:"30px ", background:"yellow", color:"#54abcd"}} onClick={this.fetchMemes} >Get memes </button>
                    <br/><br/>
                    <form align="center">

                    Top Headline : <input style = {{outline  : "none", width:"300px", height:"30px" ,border : "0px", borderRadius:"20px "}} type="text" name="topText" onChange={this.addText}  />
                    <br/>
                    <br/>
                    Bottom Headline : <input style = {{outline  : "none", width:"300px", height:"30px" ,border : "0px", borderRadius:"20px "}} type="text" name="bottomText" onChange={this.addText}  />
                    
                    
                    <br/>
                   
                    </form>

                    <p> {this.state.data.name ? "Name  : " + this.state.data.name  : ""} </p>


                        <div align="center">

                            <img  style={{borderWidth:'none'}} src= {this.state.data.url} width='700px' height='500px' />
                            
                            <div  align="center" style={up}>

                            <h2><b> {this.state.topText} </b></h2>

                            </div>
                            <div align="center" style ={down} >


                            <h2><b> {this.state.bottomText} </b></h2>


                            </div>
                            
                        </div>

                </div>
            )
    }
}