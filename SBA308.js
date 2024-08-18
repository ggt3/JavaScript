//Demo data:
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

const todaysDate = "2024-08-16";
/*Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described: 
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}
*/

function getLearnerData(course, ag, submissions) {
  let result = [];
  let learners = listOfLearners(submissions); // i.e. [125,131]

  //if assignment group does not belong to it's course, return error

  let individualSubmissions = [],
    average;
  for (const learnerID of learners) {
    console.log(learnerID + " learner ID");
    // const scores = learnerScores(learnerID, submissions,ag.assignments)

    let newLearnerInfo = {};
    newLearnerInfo["id"] = learnerID;
    let pointSum = 0,
      maxScoreSum = 0;
    for (const submission of submissions) {
      if (submission.learner_id === learnerID) {
        //only calculate for submissions of that learner
        const assignId = submission.assignment_id; //look into the particular assignment id
        const assignInfo = returnAssignOnID(ag.assignments, assignId); //get the corresponding object of the assignID
        let pointsEarned = checkPointsEarnedOnAssignment(
          submission,
          assignInfo
        );

        if (pointsEarned >= 0) {
          //if valid assign submission
          pointSum += pointsEarned;
          console.log(pointSum);
          maxScoreSum += assignInfo.points_possible;
          console.log(`tot ${assignInfo.points_possible} earn${pointsEarned}`);
          newLearnerInfo[assignId] = parseFloat(
            pointsEarned / assignInfo.points_possible
          ).toFixed(2); //calculating the score avg

          console.log(newLearnerInfo);
        }
      }
    }

    newLearnerInfo["avg"] = pointSum / maxScoreSum; //weighted average

    result.push(newLearnerInfo);
  }
  return result;
}

//given a learner, an array of all assignments and assignmentInfo, return an array of objs of that learner {assignid: percent score}
function learnerScores(learnerID, submissions, allAssigns) {}

//given submissions, return array of unique list of learners
function listOfLearners(submissions) {
  let result = [];
  for (const submission of submissions) {
    if (!result.includes(submission.learner_id)) {
      //result doesnt already have the learner
      result.push(submission.learner_id);
    }
  }
  return result;
}
//pass in one learner submission and the assignment to check it against; calculate total score (if there is a late deduct), will return -1 if assignment is not due
function checkPointsEarnedOnAssignment(learnerSubmission, assignInfo) {
  let pointsEarned;
  if (todaysDate < assignInfo.due_at) {
    //assignment not due yet
    return -1;
  }
  if (learnerSubmission.submission.submitted_at <= assignInfo.due_at) {
    //submitted within time, we should count the score as normal
    // percentScore =
    //   (learnerSubmission.submission.score / assignInfo.points_possible) * 100;

    pointsEarned = learnerSubmission.submission.score;
  } else {
    //submission is late
    const deduct = assignInfo.points_possible * 0.1;
    pointsEarned = learnerSubmission.submission.score - deduct;
    console.log(`deduct ${deduct} and points Earned ${pointsEarned}`);
  }
  //   console.log(
  //     `${assignInfo.id} id ${learnerSubmission.submission.score} learn and ${assignInfo.points_possible} total and ${percentScore} percent`
  //   );
  return pointsEarned;
}

//given an assignment id, and a list of assignmentInfo return the associated **could be null if no assignment
function returnAssignOnID(assignInfo, id) {
  for (const assign of assignInfo) {
    if (assign.id === id) {
      return assign;
    }
  }
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

//what the response should be
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];
