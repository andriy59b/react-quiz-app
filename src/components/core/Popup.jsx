import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
class Popup extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Тест ПДР',
            text: 'Цей короткий тест визначить, будете ви водити авто, чи краще не погіршувати собі і оточуючим життя:) <br /><br />',
            buttonText: 'Почати' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Вітаю!',
                buttonText: 'Почати знову'
            });

            //alert("START THE QUIZ");
            this.props.startQuiz();
        } else {
            
            //alert("FINISHED QUIZ");            
            location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'Ти закінчив тестування. <br /> Ти набрав: <strong>' + this.props.score + 
            '</strong> з <strong>' + 
            this.props.total +
            '</strong> балів.'
        })
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

