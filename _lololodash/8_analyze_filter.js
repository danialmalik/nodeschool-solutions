var _ = require("lodash");

var worker = function (freelancers) {
    let average = _.reduce(freelancers, (prev, curr, index) => {
        return prev + curr.income;
    }, 0) / Object.keys(freelancers).length;

    freelancers = _.sortBy(freelancers, 'income');

    const underperform = _.filter(freelancers, freelancer => freelancer.income <= average);
    const overperform = _.filter(freelancers, freelancer => freelancer.income > average);

    return { average, underperform, overperform }
};

module.exports = worker;
