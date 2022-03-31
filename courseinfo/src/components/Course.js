const Header = ({course}) => <h3>{course.name}</h3>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({courses}) => {
  return (
    <div>
      {courses.parts.map(part => {
          return <Part key={part.id} name={part.name} exercises={part.exercises}/>
        })}
    </div>
  )
}

const Exercises = ({course}) => {
  const ex = course.parts.reduce((acc, part) => {
    return part.exercises + acc;
  }, 0)
  return <b>total of {ex} exercises</b>
}

const Course = ({course}) => {
    return(
      <div>
        <Header course={course}/>
        <Content courses={course}/>
        <Exercises course={course}/> 
      </div>
    )
}

export default Course;