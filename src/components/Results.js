import React from 'react';
import { connect } from 'react-redux';
import Tweet from 'react-tweet';

let Results = ({ twitter, dispatch }) => {
    return (
        <div>
            {twitter.tweets.map(tweet => (
                <Tweet data={tweet} key={tweet.id} />
            ))}
        </div>
    )
};

const mapStateToProps = state => {
  return {
    twitter: state.twitter
  }
}

Results = connect(
    mapStateToProps
)(Results);

export default Results;