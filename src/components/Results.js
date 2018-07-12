import React from 'react';
import { connect } from 'react-redux';
import Tweet from 'react-tweet';

const Results = ({ tweets }) => {
    return (
        <div>
            {tweets.map(tweet => (
                <Tweet data={tweet} key={tweet.id} />
            ))}
        </div>
    )
};

const mapStateToProps = state => ({
  tweets: state.twitter.tweets
});

export default connect(
    mapStateToProps
)(Results);