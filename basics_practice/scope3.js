var eg = {
    name: "neelam",
    tasks: ['transform', 'eat', 'kiss'],
    showTask: function () {
        self = this;
        this.tasks.forEach(function (task) {
            console.log(`${self.name} wants to ${task} `);
            //console.log(this);
        })
    }
}

eg.showTask();