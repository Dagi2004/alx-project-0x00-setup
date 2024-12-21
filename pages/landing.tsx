import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="space-x-4">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded" size="medium" shape="rounded-md" />
        <Button title="Large Rounded" size="large" shape="rounded-full" />
      </div>
      <div className="space-x-4 mt-4">
        <Button
          title="Small Custom"
          size="small"
          shape="rounded-sm"
          styleClass="bg-green-500"
        />
        <Button
          title="Medium Custom"
          size="medium"
          shape="rounded-md"
          styleClass="bg-red-500"
        />
        <Button
          title="Large Custom"
          size="large"
          shape="rounded-full"
          styleClass="bg-yellow-500"
        />
      </div>
    </div>
  );
};
export default Landing;
