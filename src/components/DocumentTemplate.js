const DocumentTemplate = {
  title: "Task or Treat",
  sections: {
    header: (data) => ({
      title: "Task or Treat",
      description: `Hi, I'm ${data.name}. I'm Task or Treating right now and I'm hoping you'll participage. Think of Task or Treat as Halloween meets Giving Tuesday. Instead of going door to door for candy, I'm going door to door offering to do a task for you or, if you prefer, give you a treat. Please respond to this note as described below. Thanks, and I hope to hear from you!`
    }),
    task: {
      title: "Task",
      lines: 4
    },
    separator: "- or -",
    treat: (data) => ({
      title: "Treat",
      treat: data.treat,
      contactInfo: {
        label: "How to respond to this note",
        value: data.contactInfo
      }
    })
  }
};

export default DocumentTemplate; 