import UserCard from "./UserCard"

export default function ConditioningVisualComponent() {


  return (
    <div>
      <UserCard name="John Doe" email="john.doe@example.com" status={true} />
      <UserCard name="Jane Smith" email="jane.smith@example.com" status={false} />
      <UserCard name="Alice Johnson" email="alice.johnson@example.com" status={true} />
    </div>
  )
}