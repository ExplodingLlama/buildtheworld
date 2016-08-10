'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class CardList extends React.Component{
    //Render a single card
    renderCard(card) {
        const owner = card.ownerId || "Anonymous";
        
        return <div className="message-wrapper">
                <p className="message-header">
                    <span className="username font-600">{owner}</span>
                </p>
                <p className="message-content font-300">
                    {card.data}
                </p>

            </div>;
    }
    
    render() {
        return <main className="chat flex flex-column flex-1 clear">
                {this.props.cards.map(function(card) {
                    return <div key={card._id} className="message flex flex-row">{this.renderCard(card)}</div>;
                }.bind(this))}
        </main>;
    }
};

module.exports = CardList;