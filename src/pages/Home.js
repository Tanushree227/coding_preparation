import React from "react";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <Card>
      <div className="p-5 text-center">
        <h1>Coding Interview Preparation</h1>
        <p>
          Coding interviews are a form of technical interviews used to access a
          potential software engineer candidate's competencies through
          presenting them with programming problems.
        </p>
        <p>
          Typically, coding interviews have a focus on data structures and
          algorithms, while other technical rounds may encompass system design.
        </p>
        <br />
        <p>
          A coding interview round is typically 30 - 45 minutes. You will be
          given a technical question (or questions) by the interviewer, and will
          be expected to write code in a real-time collaborative editor such as
          CodePen or CoderPad (phone screen / virtual onsite) or on a whiteboard
          (onsite) to solve the problem within 30 to 45 minutes.
        </p>
      </div>
      <div>
        <h1>Types of Interview: </h1>
      </div>
    </Card>
  );
}
