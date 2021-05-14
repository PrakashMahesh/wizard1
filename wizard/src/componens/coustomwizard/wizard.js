
import React,{Component} from "react";

import Vechical from "./Vechicaldetails"

class Wizardcheck extends Component {
   

    constructor(props){
        super(props)
     this.state={
        step:0,
       steps:[{key:1,isDone:false,component:< Vechical action={this.done}/>},
        {key:2,isDone:false,component:"second"},
        {key:3, isDone:false,component:"third"},
        {key:4, isDone:false,component:"final"}]     
    }
    this.handleNext=this.handleNext.bind(this)
    this.handleBack=this.handleBack.bind(this)

}
done = () =>
{
    console.log(this.state.steps[0].Done1);
    let steps=[...this.state.steps];

    let step={...steps[0]};

    step.isDone=true;

    steps[0]=step;

    this.setState({steps});
    console.log(this.state.steps[0].isDone);
}
    //go to next steptht
    handleNext = () =>  {
        
        if(this.state.step===this.state.steps.length-1)
        {
            return;
        }
        let steps=[...this.state.steps];

        let step={...steps[this.state.step]};
    
        step.isDone=true;
    
        steps[this.state.step]=step;
    
        this.setState({steps});
        this.setState({
                step:this.state.step +1
        });
        console.log(this.state.step);
      if(this.state.step!==0)
            console.log(this.state.steps[this.state.step-1].isDone)
      
      
  

   
        
    }

    handleBack()  {
        
        if(this.state.step===0)
        {
            let steps=[...this.state.steps];

            let step={...steps[this.state.step]};
        
            step.isDone=false;
        
            steps[this.state.step]=step;
        
            this.setState({steps});
            this.setState({
                    step:this.state.step -1
            });
            return;
        }
      
        let steps=[...this.state.steps];

        let step={...steps[this.state.step]};
    
        step.isDone=false;
    
        steps[this.state.step-1]=step;
    
        this.setState({steps});
        this.setState({
                step:this.state.step -1
        });
        console.log(this.state.step);
     
      
   
   
        
    }
   
    render(){

  
       
        return(
          
            
            <div>
                <div className="wizard">
                    <div className="wizardbody">
                     <div className= "car" onClick={this.handleNext.bind(this)} >
                            <img src={require('../images/car.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.steps[0].isDone?"tickmark":"tickmarknone"}></img>
                        </div>
                               <div className="line">
                                </div> 


                        <div className={this.state.steps[0].isDone?"car":"cardone"}onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/contact.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.steps[1].isDone?"tickmark":"tickmarknone"}></img>
                        </div>

                        <div className="line">
                                </div> 
                        
                        <div className={this.state.steps[1].isDone?"car":"cardone"}onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/vechical.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.steps[2].isDone?"tickmark":"tickmarknone"}></img>
                        </div>
                        <div className="line">
                                </div> 
                            
                        <div className= {this.state.steps[2].isDone?"car":"cardone"} onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/Checklist_2_.svg').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className="tickmarknone"></img>
                        </div>
                    
                    </div>

                </div>
                <div className="contentbody">                   
                        {this.state.steps[this.state.step].component}
                  
                        <button onClick={this.handleNext}>next</button>
                        <button onClick={this.handleBack}>back</button>
                  
                </div>
            </div>
        )

     

    }
  }




export default Wizardcheck;
