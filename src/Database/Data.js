export const blogs = [
    {
        id : 1,
        title: 'How to Create a To-Do app in Django with Bootstrap and Font-Awesome!',
        date : 'Dec 16, 2020',
        image : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1609672588706/hmQ2v_zdI.png',
        description: 'Why should we make a To-Do? To-Do is super helpful for beginners. Any Django project needs a database and for that you must know how to handle databases in Django, making a To-Do app makes us learn basic database operations like CRUD i.e. Create, Re...',
        text: "### Why should we make a To-Do?\n" +
            "\n" +
            "- To-Do is super helpful for beginners.\n" +
            "- Any Django project needs a **database** and for that you must know how to handle databases in Django, making a To-Do app makes us learn basic database operations like CRUD i.e. Create, Read, Update and Delete.\n" +
            "- It's fun!\n" +
            "\n" +
            "### Requirements\n" +
            "- Just latest version of [python](https://www.python.org/) and we are good to go.\n" +
            "\n" +
            "\n" +
            "## I. Virtual Environment\n" +
            "---\n" +
            "**[Virtual Environment](https://docs.python.org/3/tutorial/venv.html)** is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.\n" +
            "\n" +
            "### Creating Virtual Environment\n" +
            "\n" +
            "```python\n" +
            "python3 -m venv env\n" +
            "```\n" +
            "\n" +
            "![Untitled.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113285634/6Ae3CeEXl.png)\n" +
            "\n" +
            "\n" +
            "### Activating Virtual Environment\n" +
            "\n" +
            "After creating an Virtual Environment we need to activate it, in order to get inside that virtual space.\n" +
            "\n" +
            "```python\n" +
            "source env/bin/activate\n" +
            "```\n" +
            "\n" +
            "![Untitled 1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113422090/fjLM10hcn.png)\n" +
            "\n" +
            "\n" +
            "## II. Setting Up Django\n" +
            "\n" +
            "---\n" +
            "\n" +
            "### Installing Django\n" +
            "\n" +
            "Now that we have our **Virtual Environment** set up, lets install Django in it.\n" +
            "\n" +
            "```python\n" +
            "pip install django\n" +
            "```\n" +
            "\n" +
            "\n" +
            "![Untitled 2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113511714/5-XEXbxkX.png)\n" +
            "\n" +
            "### Creating Django Project\n" +
            "\n" +
            "Here we'll have to auto-generate some code that establishes a Django project – a collection of settings for an instance of Django, including database configuration, Django-specific options and application-specific settings.\n" +
            "\n" +
            "```python\n" +
            "django-admin startproject <Project's Name>\n" +
            "```\n" +
            "\n" +
            "\n" +
            "![Untitled 3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113545828/2HT7cIoxI.png)\n" +
            "\n" +
            "This will create a directory named <Project's Name> in your current directory. We'll cd into it. There you'll find two things namely \n" +
            "\n" +
            "- manage.py\n" +
            "- tutorial directory named after your project's name, this directory contains all initial settings for an instance of Django.\n" +
            "\n" +
            "\n" +
            "![Untitled 4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113559028/ctmsM-uSg.png)\n" +
            "\n" +
            "## III. Creating our First App\n" +
            "\n" +
            "---\n" +
            "\n" +
            "Now that we have our initial Django setup ready, we'll create our to-do app.  Each application you write in Django consists of a python package that follows a certain convention. Django comes with a utility that automatically generates the basic directory structure of an app, so you can focus on writing code rather than creating directories.\n" +
            "\n" +
            "```python\n" +
            "python3 manage.py startapp <App's Name>\n" +
            "```\n" +
            "\n" +
            "\n" +
            "![Untitled 5.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608113572234/9zATYA1F_.png)\n" +
            "\n" +
            "You'll find a new directory named <App's Name>.  This directory contains all initial settings for our app.\n" +
            "\n" +
            "## IV. Integrating our todo app with the project\n" +
            "\n" +
            "---\n" +
            "\n" +
            "Django uses **plug and play** feature.\n" +
            "\n" +
            "What's that?\n" +
            "\n" +
            "- Suppose you're working on a large app with plenty of code, a single app won't do much of a help rather than creating confusion and taking eternity to find and fix any issue.\n" +
            "- In this scenario we might create multiple apps for specific features or requirements, this'll make it easy to understand and quick to fix any issue, like if something goes wrong or we just don't want that feature anymore, just pull the plug and everything else still works like a charm.\n" +
            "\n" +
            "Following this we need to tell Django which app we want to integrate/plug in. \n" +
            "\n" +
            "- Head to <Project's Name> directory. Open urls.py\n" +
            "\n" +
            "```python\n" +
            "from django.contrib import admin\n" +
            "from django.urls import path, include\n" +
            "\n" +
            "urlpatterns = [\n" +
            "    path('admin/', admin.site.urls),\n" +
            "    path('', include('todo.urls')),    #add this line\n" +
            "]\n" +
            "```\n" +
            "\n" +
            "We'll create todo's [urls.py](http://urls.py) in a moment.\n" +
            "\n" +
            "- Head to <Project's Name> directory. Open settings.py. We'll add our todo app into installed apps.\n" +
            "\n" +
            "```python\n" +
            "INSTALLED_APPS = [\n" +
            "    'django.contrib.admin',\n" +
            "    'django.contrib.auth',\n" +
            "    'django.contrib.contenttypes',\n" +
            "    'django.contrib.sessions',\n" +
            "    'django.contrib.messages',\n" +
            "    'django.contrib.staticfiles',\n" +
            "\n" +
            "    'todo.apps.TodoConfig',    #add this line\n" +
            "]\n" +
            "```\n" +
            "\n" +
            "Voila! it's integrated.\n" +
            "\n" +
            "## V. Creating Models\n" +
            "\n" +
            "---\n" +
            "\n" +
            "### [What are Models?](https://docs.djangoproject.com/en/3.1/topics/db/models/#:~:text=A%20model%20is%20the%20single,to%20a%20single%20database%20table.&text=With%20all%20of%20this%2C%20Django,access%20API%3B%20see%20Making%20queries.)\n" +
            "\n" +
            "A model is the single, definitive source of information about your data. It contains the essential fields and behaviours of the data you’re storing. Generally, each model maps to a single database table.\n" +
            "\n" +
            "Now we need to store data (tasks in our case) somewhere in our To-Do app.  For that we'll create a model named **Tasks**.\n" +
            "\n" +
            "- Head to the todo directory, there you'll find '**models.py**'\n" +
            "\n" +
            "```python\n" +
            "from django.db import models\n" +
            "\n" +
            "# Create your models here.\n" +
            "class Tasks(models.Model):\n" +
            "    task = models.CharField(max_length=100)\n" +
            "    completed = models.BoolenField(default=False)\n" +
            "\n" +
            "\t\tdef __str__(self):\n" +
            "        return f\"{self.task}\"\n" +
            "```\n" +
            "\n" +
            "- **task** is a character field (a string) with a max length of 100 i.e. task's can't exceed beyond 100 characters.\n" +
            "- **completed** is a boolean field we'll use to determine whether a particular task is complete or not. By default we'll set it to false i.e. incomplete task.\n" +
            "- **What is __ *str* __ function**?\n" +
            "    1. It's a **string** which model class will return for each individual **Tasks** object. \n" +
            "    2. For example let's say we have a number of tasks in our database, if we were to identify which task is what, by default Django will return Tasks objects as TasksObject#1, TasksObject#2, TasksObject#3....... now that's not readable, how will we know what TasksObject#3 is? \n" +
            "    3. Here comes __ *str* __ to our help, we tell Django to return 'task' which is a string in our **Tasks** model, instead of TasksObject#whatever, now we know which task is what.\n" +
            "\n" +
            "## VI. Creating URL's\n" +
            "\n" +
            "---\n" +
            "\n" +
            "### **What are URL's?**\n" +
            "\n" +
            "- URL's are the pathways where user can navigate to, like we have written every possible route a end user or an admin can take in our app.\n" +
            "- Now where this pathway lead us to? Here comes view's. Think of view as a destination URL's lead to.\n" +
            "- Django maintains **urlpatterns**, a list where we write our pathway's to our destination's. Let's create\n" +
            "\n" +
            "    ```python\n" +
            "    from django.urls import path\n" +
            "\n" +
            "    from . import views\n" +
            "\n" +
            "    app_name = 'ToDo'\n" +
            "    urlpatterns = [\n" +
            "        path('', views.index, name=\"Home\"),\n" +
            "        path('/addTask', views.addTask, name=\"Add Task\"),\n" +
            "        path('/deleteTask/<int:id>', views.deleteTask, name=\"Delete Task\"),\n" +
            "        path('/completedTask/<int:id>', views.completedTask, name=\"Task Completed\"),\n" +
            "        path('/updateTask/<int:id>', views.updateTask, name=\"Update Task\"),\n" +
            "        path('/deleteAllCompleted', views.deleteAllCompleted, name=\"Delete all Completed\"),\n" +
            "    \tpath('/deleteAll', views.deleteAll, name=\"Delete All\"),\n" +
            "    ]\n" +
            "    ```\n" +
            "\n" +
            "- Each URL is accompanied with a complementary view like **views.<view name>**, our destination.\n" +
            "\n" +
            "### Our app has 7 different URL's :\n" +
            "\n" +
            "1. Where will user be as soon as he/she opens our app? Well empty URL (' ') i.e. **root** is the answer and we are mapping that empty URL (' ' ) to the index view.\n" +
            "2. **Add Task URL** → this URL adds task in our app's database.\n" +
            "3. **Delete Task URL** → this URL delete's task from our app's database, but question comes which task should be deleted? here comes concept of an unique id, each task has it's own unique id **(primary key)** which Django generates automatically during task creation and maintains it, which needs to be passed in the URL, to identify a particular task.\n" +
            "4. **Completed Task URL** →this URL mark's a task as completed, i.e. changes that default false value we gave to **completed** to true.\n" +
            "5. **Update Task** → this URL is used to Update a task.\n" +
            "6. **Delete All Completed** → this URL is used to remove all the completed tasks from the database, no clutter or mess.\n" +
            "7. **Delete All →** this URL is used to delete all tasks from the database. A reset.\n" +
            "\n" +
            "It's time to know what actually happens when we reach our destination using URL's. Let's code views for our URL's.\n" +
            "\n" +
            "## VI. Creating Views\n" +
            "\n" +
            "---\n" +
            "\n" +
            "### **What are Views?**\n" +
            "\n" +
            "- Now every time we visit a URL, we make a request asking Django is this destination available? if available, take us to that destination and perform the deeds, else classic 404 NOT FOUND error.\n" +
            "- Views are callable functions which takes in the request, performs the deeds and gets us a response.\n" +
            "\n" +
            "Let's create some views\n" +
            "\n" +
            "### Index view\n" +
            "---\n" +
            "\n" +
            "\n" +
            "    from django.shortcuts import render, redirect\n" +
            "\n" +
            "    from .models import Tasks\n" +
            "    from .forms import AddTaskForm\n" +
            "\n" +
            "    def index(request):\n" +
            "\n" +
            "        tasks = Tasks.objects.all()\n" +
            "        form = AddTaskForm()\n" +
            "\n" +
            "        context = {\n" +
            "            'tasks' : tasks,\n" +
            "            'form' : form,\n" +
            "        }\n" +
            "\n" +
            "        return render(request, 'todo/index.html', context)\n" +
            "  \n" +
            "\n" +
            "Everything we write inside any view are our deeds to be performed.\n" +
            "\n" +
            "- *tasks = Tasks.objects.all()* → Tasks.objects.all() returns all the task objects in our **Tasks model** in form of a list.\n" +
            "- *form = AddTaskForm()* → We'll get to form's in a bit. For now, we're just initializing an empty AddTaskForm().\n" +
            "- context{} → imagine context as a container, which will carry **contents we mention** from our database to the templates(.html files), so we carry **tasks** and a **form** from our database to the **index.html**.\n" +
            "- *return render(request, 'todo/index.html', context)* → this combines our .html file with the context and renders a response, i.e. **a html page with dynamic content from the database**.\n" +
            "\n" +
            "Here we can see our data went from our database to the .html part, where we'll be able to display the data dynamically as per our requirements. What if we wanna do it the reverse way, i.e. we want to send data from the user to the database? FORM'S!\n" +
            "\n" +
            "Creating a form → we'll create a new file named [forms.py](http://forms.py) in our todo app\n" +
            "\n" +
            "```python\n" +
            "from django import forms\n" +
            "from django.forms import ModelForm\n" +
            "\n" +
            "from .models import Tasks\n" +
            "\n" +
            "class AddTaskForm(forms.ModelForm):\n" +
            "\n" +
            "\ttask = forms.CharField(max_length = 250,\n" +
            "\t\t\t\t\t\t\twidget = forms.TextInput(\n" +
            "\t\t\t\t\t\t\t\tattrs = {\n" +
            "\t\t\t\t\t\t\t\t\t'class' : 'form-control',\n" +
            "\t\t\t\t\t\t\t\t\t'placeholder' : 'task?', \n" +
            "\t\t\t\t\t\t\t\t}\n" +
            "\t\t\t\t\t\t\t)\n" +
            "\t\t\t\t\t\t)\n" +
            "\n" +
            "\tclass Meta:\n" +
            "\t\tmodel = Tasks\n" +
            "\t\tfields = '__all__'\n" +
            "```\n" +
            "\n" +
            "- Here we used a model form, now model forms are forms specific to the models we create in Django, it'll contain all input fields mapped closely to the fields in our model .  To know more about Model form → **[HERE](https://docs.djangoproject.com/en/3.1/topics/forms/modelforms/).**\n" +
            "- **task** is a string of max length 250.\n" +
            "- For the text field (task) to look cool we are applying a bootstrap class 'form-control' with placeholder 'task?' as attributes to the widget.\n" +
            "\n" +
            "\n" +
            "### Add Task view\n" +
            "\n" +
            "---\n" +
            "\n" +
            "```python\n" +
            "def addTask(request):\n" +
            "\n" +
            "\tform = AddTaskForm(request.POST)\n" +
            "\n" +
            "\tif form.is_valid():\n" +
            "\t\tform.save()\n" +
            "\n" +
            "\treturn redirect('/')\n" +
            "```\n" +
            "\n" +
            "- *form = AddTaskForm(request.POST)* → We initialize the AddTaskForm but this time with some contents which were passed in with the POST request.\n" +
            "- *if form.is_valid():* →We check whether the form is valid or not.\n" +
            "- *form.save()* → save it to the database.\n" +
            "- *return redirect('/')* → return to the index page.\n" +
            "\n" +
            "### Delete Task View\n" +
            "---\n" +
            "\n" +
            "```python\n" +
            "def deleteTask(request, id):\n" +
            "\n" +
            "\ttask = Tasks.objects.get(pk = id)\n" +
            "\n" +
            "\ttask.delete()\n" +
            "\n" +
            "\treturn redirect('/')\n" +
            "```\n" +
            "\n" +
            "- We get an id of the task to be deleted, with the request.\n" +
            "- *task = Tasks.objects.get(pk = id) →* we get that particular task, with primary key = **id** from the database.\n" +
            "- *task.delete()* → we simply delete that task.\n" +
            "\n" +
            "### Completed Task View\n" +
            "---\n" +
            "\n" +
            "```\n" +
            "def completedTask(request, id):\n" +
            "\n" +
            "\ttask = Tasks.objects.get(pk = id)\n" +
            "\t\n" +
            "\ttask.completed = True\n" +
            "\ttask.save()\n" +
            "\n" +
            "\treturn redirect('/')\n" +
            "```\n" +
            "\n" +
            "- We get an id of the task to be marked as completed, with the request.\n" +
            "- *task = Tasks.objects.get(pk = id) →* we get that particular task, with primary key = **id** from the database.\n" +
            "- *task.completed = True →* setting the default false value of **completed** to true.\n" +
            "- *task.save() →* save's the task to the database.\n" +
            "\n" +
            "### Update Task View\n" +
            "---\n" +
            "\n" +
            "```python\n" +
            "def updateTask(request, id):\n" +
            "\n" +
            "\ttask = Tasks.objects.get(pk = id)\n" +
            "\tupdateForm = AddTaskForm(instance = task)\n" +
            "\n" +
            "\tif request.method == 'POST':\n" +
            "\t\tform = AddTaskForm(request.POST, instance = task)\n" +
            "\t\tif form.is_valid():\n" +
            "\t\t\tform.save()\n" +
            "\t\t\treturn redirect('/')\n" +
            "\n" +
            "\tcontext = {\n" +
            "\t\t'updateForm' : updateForm,\n" +
            "\t\t'key' : id,\n" +
            "\t\t\n" +
            "\t\t'tasks' : Tasks.objects.all(),\n" +
            "\t}\n" +
            "\n" +
            "\treturn render(request, 'todo/index.html', context)\n" +
            "```\n" +
            "\n" +
            "- This one is somewhat tricky, here we get an id of the task to be updated, with the request.\n" +
            "- *task = Tasks.objects.get(pk = id) →* we get that particular task, with primary key = **id** from the database.\n" +
            "- Now that we have to update a task, we need to firstly know **what's in it,** secondly **what changes were made,** and then save it.\n" +
            "- *updateForm = AddTaskForm(instance = task) →*  We created a **AddTaskForm** named **updateForm** with task to be updated as an instance, the '***firstly'*** done.\n" +
            "- *if request.method == 'POST': →* This section combines changes i.e. edits to the task, which were sent via POST request, with the task instance.\n" +
            "    1. *form = AddTaskForm([request.POST](http://request.POST), instance = task) →* We combine our task instance obtained in ***firstly*** part, with the changes made by the user ( request.POST ) into a AddTaskForm.\n" +
            "    2. *if form.is_valid(): →* Check whether the form is valid or not.\n" +
            "    3. *form.save() →* If valid save the form.\n" +
            "    4. *return redirect('/') →* Return to the index page.\n" +
            "- context → Our context has three item: updateForm, key and tasks.\n" +
            "    1. updateForm → Our AddTaskForm with the instance of task to be updated.\n" +
            "    2. key → Id ( primary key ) of the task to be updated.\n" +
            "    3. tasks → List of all tasks in our database.\n" +
            "\n" +
            "###  Delete All Completed View\n" +
            "---\n" +
            "\n" +
            "```python\n" +
            "def deleteAllCompleted(request):\n" +
            "\n" +
            "\tcompletedTasks = Tasks.objects.filter(completed__exact=True).delete()\n" +
            "\n" +
            "\treturn redirect('/')\n" +
            "```\n" +
            "\n" +
            "- *completedTasks = Tasks.objects.filter(completed__exact=True).delete() →* We filter out the completed tasks in our database and delete them.\n" +
            "\n" +
            "### Delete All View\n" +
            "---\n" +
            "\n" +
            "```python\n" +
            "def deleteAll(request):\n" +
            "\n" +
            "\tTasks.objects.all().delete()\n" +
            "\n" +
            "\treturn redirect('/')\n" +
            "```\n" +
            "\n" +
            "- *Tasks.objects.all().delete() →* We delete all the tasks in our database.\n" +
            "\n" +
            "## VII. Creating Templates\n" +
            "\n" +
            "---\n" +
            "\n" +
            "Here we'll create the **index.html** which we used in our views. It is the end point of our app, like this is what everyone will see and interact with.\n" +
            "\n" +
            "- Here we are going to use :\n" +
            "    1. Html\n" +
            "    2. [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - For styling the page\n" +
            "    3. [Font Awesome Icons](https://fontawesome.com/)\n" +
            "\n" +
            "```html\n" +
            "<!DOCTYPE html>\n" +
            "<html>\n" +
            "\n" +
            "    <head>\n" +
            "        <title>To-Do App</title>\n" +
            "        \n" +
            "        <!-- Required meta tags -->\n" +
            "        <meta charset=\"utf-8\">\n" +
            "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n" +
            "\n" +
            "        <!-- Bootstrap CSS -->\n" +
            "        <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\n" +
            "\n" +
            "        <!-- Font Awesome -->\n" +
            "        <script src=\"https://kit.fontawesome.com/4764f4dcde.js\" crossorigin=\"anonymous\"></script>\n" +
            "    </head>\n" +
            "\n" +
            "    <body>\n" +
            "\n" +
            "        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
            "            <a class=\"navbar-brand\" href=\"#\">To-Do</a>\n" +
            "            \n" +
            "            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
            "            <span class=\"navbar-toggler-icon\"></span>\n" +
            "            </button>\n" +
            "\n" +
            "            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
            "                <ul class=\"navbar-nav mr-auto\">\n" +
            "                  <li class=\"nav-item active\">\n" +
            "                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n" +
            "                  </li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "        </nav>\n" +
            "        \n" +
            "        <div class=\"container mt-4\">\n" +
            "            <div class=\"row\">\n" +
            "                <div class=\"col-12\">\n" +
            "                    <div class=\"card border-info mb-3\" >\n" +
            "                        <div class=\"card-header text-center\">My To-Do</div>\n" +
            "                            <div class=\"card-body text-info\">\n" +
            "                                \n" +
            "                                {% if updateForm %}\n" +
            "                                    <form action=\"{% url 'ToDo:Update Task' key %}\" method=\"post\">\n" +
            "                                        {% csrf_token %}\n" +
            "                                        <div class=\"input-group mb-3 shadow bg-white\">\n" +
            "                                            {{ updateForm.task }}\n" +
            "                                            <div class=\"input-group-append\">\n" +
            "                                                <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Add Task</button>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </form>\n" +
            "                                \n" +
            "                                {% else %}\n" +
            "                                    <form action=\"{% url 'ToDo:Add Task' %}\" method=\"post\">\n" +
            "                                        {% csrf_token %}\n" +
            "                                        <div class=\"input-group mb-3 shadow bg-white\">\n" +
            "                                            {{ form.task }}\n" +
            "                                            <div class=\"input-group-append\">\n" +
            "                                                <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Add Task</button>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </form>\n" +
            "                                {% endif %}\n" +
            "\n" +
            "                                <div class=\"row mt-4\">\n" +
            "                                    <div class=\"col-8\">\n" +
            "                                        <h3 class=\"card-title\">Tasks</h3>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-2\">\n" +
            "                                        <a href=\"{% url 'ToDo:Delete all Completed' %}\">\n" +
            "                                            <button type=\"button\" class=\"btn btn-sm btn-outline-info rounded-pill\">Remove Completed</button>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-2 mr-auto\">\n" +
            "                                        <a href=\"{% url 'ToDo:Delete All' %}\">\n" +
            "                                            <button type=\"button\" class=\"btn btn-sm btn-outline-info rounded-pill\">Remove All</button>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                \n" +
            "                                \n" +
            "\n" +
            "                                {% for task in tasks %}\n" +
            "                                <div class=\"card mt-2 shadow-sm\">\n" +
            "                                    <div class=\"card-body\">\n" +
            "                                        <div class=\"row\">\n" +
            "                                            <div class=\"col-10\">\n" +
            "                                                <a href=\"{% url 'ToDo:Task Completed' task.id %}\">\n" +
            "                                                    {% if task.completed %}\n" +
            "                                                        <del><h5 class=\"card-title\">{{ task }}</h5></del>\n" +
            "                                                    {% else %}\n" +
            "                                                        <h5 class=\"card-title\">{{ task }}</h5>\n" +
            "                                                    {% endif %}\n" +
            "                                                    \n" +
            "                                                    \n" +
            "                                                </a>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"col-1 close\">\n" +
            "                                                <a href=\"{% url 'ToDo:Update Task' task.id %}\">\n" +
            "                                                    <i class=\"fas fa-marker\"></i>\n" +
            "                                                </a>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"col-1\">\n" +
            "                                                <a href=\"{% url 'ToDo:Delete Task' task.id %}\">\n" +
            "                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\">\n" +
            "                                                      <span aria-hidden=\"true\">&times;</span>\n" +
            "                                                    </button>\n" +
            "                                                </a>\n" +
            "                                            </div>    \n" +
            "                                            \n" +
            "                                        </div>                                                                                                            \n" +
            "                                      {% if task.completed %}\n" +
            "                                      <p class=\"card-text\"><small class=\"text-muted\">It's Done!</small></p>\n" +
            "                                      {% endif %}\n" +
            "                                    </div>\n" +
            "                                  </div>\n" +
            "                                {% endfor %}  \n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div> \n" +
            "                </div>\n" +
            "            </div>     \n" +
            "        </div>\n" +
            "\n" +
            "        <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n" +
            "        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\"></script>\n" +
            "    </body>\n" +
            "</html>\n" +
            "```\n" +
            "\n" +
            "- Our header part contains component scripts and links, which we obtain from their respective websites.\n" +
            "    1. [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)\n" +
            "    2. [Font Awesome Icons](https://fontawesome.com/)\n" +
            "- Now if you have basic bootstrap knowledge, you'll understand the structure of the page.\n" +
            "\n" +
            "### Let's get a overview of what's going on\n" +
            "\n" +
            "---\n" +
            "\n" +
            "- In the upper part of the body, for user to enter task's we have form's with conditions, whether the user is adding a new task or updating a existing task. If updating it'll get us an updateForm with 'task to be updated' instance else AddTaskForm.\n" +
            "\n" +
            "    ```html\n" +
            "    {% if updateForm %}\n" +
            "        <form action=\"{% url 'ToDo:Update Task' key %}\" method=\"post\">\n" +
            "            {% csrf_token %}\n" +
            "            <div class=\"input-group mb-3 shadow bg-white\">\n" +
            "                {{ updateForm.task }}\n" +
            "                <div class=\"input-group-append\">\n" +
            "                    <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Add Task</button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </form>\n" +
            "\n" +
            "    {% else %}\n" +
            "        <form action=\"{% url 'ToDo:Add Task' %}\" method=\"post\">\n" +
            "            {% csrf_token %}\n" +
            "            <div class=\"input-group mb-3 shadow bg-white\">\n" +
            "                {{ form.task }}\n" +
            "                <div class=\"input-group-append\">\n" +
            "                    <button class=\"btn btn-outline-secondary\" type=\"submit\" id=\"button-addon2\">Add Task</button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </form>\n" +
            "    {% endif %}\n" +
            "    ```\n" +
            "\n" +
            "- We are adding two buttons for **delete completed tasks** and **delete all tasks**.\n" +
            "\n" +
            "```html\n" +
            "<div class=\"row mt-4\">\n" +
            "    <div class=\"col-8\">\n" +
            "        <h3 class=\"card-title\">Tasks</h3>\n" +
            "    </div>\n" +
            "    <div class=\"col-2\">\n" +
            "        <a href=\"{% url 'ToDo:Delete all Completed' %}\">\n" +
            "            <button type=\"button\" class=\"btn btn-sm btn-outline-info rounded-pill\">Remove Completed</button>\n" +
            "        </a>\n" +
            "    </div>\n" +
            "    <div class=\"col-2 mr-auto\">\n" +
            "        <a href=\"{% url 'ToDo:Delete All' %}\">\n" +
            "            <button type=\"button\" class=\"btn btn-sm btn-outline-info rounded-pill\">Remove All</button>\n" +
            "        </a>\n" +
            "    </div>\n" +
            "</div>\n" +
            "```\n" +
            "\n" +
            "\n" +
            "- In the final part we'll display all the tasks present in our database with their complete statuses, i.e. we'll strike the completed tasks and display **Done!** We'll also provide the user with update and delete buttons on each task, through which he/she can update or delete any particular task.\n" +
            "\n" +
            "```html\n" +
            "\t\t\n" +
            "{% for task in tasks %}\n" +
            "\t<div class=\"card mt-2 shadow-sm\">\n" +
            "\t    <div class=\"card-body\">\n" +
            "\t        <div class=\"row\">\n" +
            "\t            <div class=\"col-10\">\n" +
            "\t                <a href=\"{% url 'ToDo:Task Completed' task.id %}\">\n" +
            "\t                    {% if task.completed %}\n" +
            "\t                        <del><h5 class=\"card-title\">{{ task }}</h5></del>\n" +
            "\t                    {% else %}\n" +
            "\t                        <h5 class=\"card-title\">{{ task }}</h5>\n" +
            "\t                    {% endif %}\n" +
            "\t                    \n" +
            "\t                  \n" +
            "\t                </a>\n" +
            "\t            </div>\n" +
            "\t            <div class=\"col-1 close\">\n" +
            "\t                <a href=\"{% url 'ToDo:Update Task' task.id %}\">\n" +
            "\t                    <i class=\"fas fa-marker\"></i>\n" +
            "\t                </a>\n" +
            "\t            </div>\n" +
            "\t            <div class=\"col-1\">\n" +
            "\t                <a href=\"{% url 'ToDo:Delete Task' task.id %}\">\n" +
            "\t                    <button type=\"button\" class=\"close\" aria-label=\"Close\">\n" +
            "\t                      <span aria-hidden=\"true\">&times;</span>\n" +
            "\t                    </button>\n" +
            "\t                </a>\n" +
            "\t            </div>    \n" +
            "\t            \n" +
            "\t        </div>                                                                                                            \n" +
            "\t      {% if task.completed %}\n" +
            "\t      <p class=\"card-text\"><small class=\"text-muted\">It's Done!</small></p>\n" +
            "\t      {% endif %}\n" +
            "\t    </div>\n" +
            "\t  </div>\n" +
            "\t{% endfor %}  \n" +
            "```\n" +
            "\n" +
            "## The Result\n" +
            "\n" +
            "---\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "![Untitled 7.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608114198326/tOU3-U6XR.png)\n" +
            "\n" +
            "## Resource's\n" +
            "\n" +
            "---\n" +
            "\n" +
            "1. [Django](https://docs.djangoproject.com/en/3.1/)'s documentation.\n" +
            "2. [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)'s documentation.\n" +
            "\n" +
            "Source Code : [HERE](https://github.com/undefinedzack/TUTORIAL-how-to-create-a-todo-app-in-Django)\n" +
            "\n" +
            "that's all peeps.......thank you for reading!"
    },
    {
        id : 2,
        title : 'How to deploy a Django app to Heroku',
        date : 'Jan 3, 2021',
        image : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1609672588706/hmQ2v_zdI.png',
        description: 'Introduction Here we\'ll deploy a To-Do app I made in Django. Here\'s source-code. Initial Setup Installing Heroku CLI On Linux curl https://cli-assets.heroku.com/install.sh | sh On Windows Just download and install the Heroku CLI from here. ...',
        text : `Introduction
---
---
- Here we'll deploy a To-Do app I made in Django. Here's [source-code](https://undefinedzack.hashnode.dev/how-to-create-a-to-do-app-in-django-with-bootstrap-and-font-awesome).


Initial Setup
---
---

### Installing Heroku CLI

---

1. On Linux

    \`\`\`c
    curl https://cli-assets.heroku.com/install.sh | sh
    \`\`\`

2. On Windows

    Just download and install the Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### Verifying installation

---

To verify our CLI installation

\`\`\`c
heroku --version
\`\`\`


![Screenshot_from_2021-01-03_01-18-01.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672183774/Bi-sh1WOB.png)

### Creating a Heroku Account

---

If you don't have a [Heroku](http://heroku.com) account, go ahead and create one.

Diving In!
---
---

### Log In

---

We'll have to log in into our Heroku account through CLI.

\`\`\`c
heroku login
\`\`\`

- It'll open up your default browser, where you'll have to enter your login credentials.
- After successful login, we can now create and manage our Heroku apps directly from the terminal.


![Screenshot_from_2021-01-03_01-22-14.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672201730/lTpWHrPie.png)

### Creating a git repository

---

**Why do we need a git repository?**

- Think of it as an update mechanism, with every commit we'll make it'll act as an update to our deployed app.
- This even helps us in creating restore points, if at any point a new update is crashing our app or has too many annoying bugs, we can hop onto the previous stable commit, and save us the downtime losses.

→ Initialize the git repository, in the directory which contains manage.py

\`\`\`jsx
git init
\`\`\`

→ Add everything we have in our app, to the git repository.

\`\`\`jsx
git add .
\`\`\`

→ Make a commit

\`\`\`jsx
git commit -m "initial commit"
\`\`\`

### Creating a Heroku app

---

\`\`\`jsx
heroku create
\`\`\`

It'll create a Heroku app with any random name. In my case it's "salty-peak-80429".


![Screenshot_from_2021-01-03_01-44-52.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672257461/eZemH_I-O.png)

**Linking our git repository with our Heroku app**

- We'll have to link our heroku app to our git repository because we know we'll be making commits to this repository but heroku doesn't know what to watch.

\`\`\`jsx
heroku git:remote -a salty-peak-80429
\`\`\`

### Setting up App server

---

- Now Django comes with it's own development server (**python [mange.py](http://mange.py) runserver)**, we have tested our app on development server ample of times.
- Well when we deploy our app to heroku we can no longer use our development server, we'll need some kind of "app server" which heroku will serve after installing the app on it's server.
- Moreover before we deploy our app we'll have to make sure that our app still functions in the app server.

Let's install an app server.

\`\`\`jsx
pip install gunicorn
\`\`\`

Let's test our app server. Locate the [wsgi.py](http://wsgi.py) file in your main app directory, in my case my main directory is 'tutorial'.

\`\`\`jsx
gunicorn tutorial.wsgi
\`\`\`

This command doesn't run on windows because gunicorn is incompatible with windows. For more information → [here](https://stackoverflow.com/questions/11087682/does-gunicorn-run-on-windows).

It'll start a server on our [localhost](http://localhost) port 8000.


![Screenshot_from_2021-01-03_12-07-50.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672311365/G2xWya_lf.png)

- Now we'll have to test our app to make sure whether everything's working fine or not. Go ahead and have a look.
- Now we know our app functions well even on app server.

At this stage we are ready with our app to be deployed, but the thing is 

- Heroku neither knows how to start our app server, nor does it know what will our app require for functioning.
- In order to tell Heroku these thing's we'll have to create 2 more files :
    - Procfile
    - requirements.txt

### Creating Procfile

---

**What's a Procfile?**

- Heroku apps include a Procfile that specifies the commands that are executed by the app on startup. You can use a Procfile to declare a variety of process types, including:
    - Your app’s web server
    - Multiple types of worker processes
    - A singleton process, such as a [clock](https://devcenter.heroku.com/articles/scheduled-jobs-custom-clock-processes)
    - Tasks to run [before a new release is deployed](https://devcenter.heroku.com/articles/release-phase)
- For more information about Procfile refer → [here](https://devcenter.heroku.com/articles/procfile)

In the main directory which contains 'manage.py', we create Procfile

\`\`\`jsx
touch Procfile
\`\`\`

Now we'll have to write commands which heroku should execute on app startup, this includes starting up app server.

\`\`\`jsx
web: gunicorn tutorial.wsgi
\`\`\`

### Creating Requirements.txt

---

This file will contains all the modules we used in our app for proper functioning and yeah you don't have to manually write down every module you used, there's a command for that

\`\`\`jsx
pip freeze > requirements.txt
\`\`\`

It'll automatically calculate what modules you have used with the version.


![Screenshot_from_2021-01-03_12-33-42.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672347004/hUJ6zVATn.png)

make sure you're running this command inside your virtual environment, to know how to create one → [here](https://undefinedzack.hashnode.dev/how-to-create-a-to-do-app-in-django-with-bootstrap-and-font-awesome).

### Finishing up

---

Let's update our git repository with all the latest changes.

We'll perform

- **git add .** and
- **git commit -m "added gunicorn (app server) with requirements.txt and Procfile"**

Let's push it

\`\`\`jsx
git push heroku master
\`\`\`


![Screenshot_from_2021-01-03_15-21-15.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609672377781/_yj3OgMuc.png)

### Possible Errors

---

- If you haven't set static root in your Django settings, you'll get a **DISABLECOLLECTSTATIC** error.
- Django doesn't serve static files in the app server on it's own, that's why we have to define a place where heroku can keep and manage all the static files.
- Just add **STATIC_ROOT** in your [settings.py](http://settings.py) file.

\`\`\`jsx
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
\`\`\`

- We also need to add our heroku site to ALLOWED_HOSTS in [settings.py](http://settings.py), if you haven't already
- i.e. in my case I'll have to allow [https://salty-peak-80429.herokuapp.com](https://salty-peak-80429.herokuapp.com/), or we can simply allow all hosts

\`\`\`jsx
ALLOWED_HOSTS = ['*']
\`\`\`

- After making changes, make a commit and try pushing with **git push heroku master** again.

### It's Deployed!

---

Yup if no error occurs during push command which usually comes if you're doing it for the first time, but hang on, solution's right around the corner waiting for you, you just need to seek it.

You can check out my deployed to-do app at - 

[To-Do App](https://salty-peak-80429.herokuapp.com/)

### Resources

---

- [Heroku Documentation](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- [Source Code](https://github.com/undefinedzack/TUTORIAL-how-to-deploy-a-django-app-to-heroku)

thats all peeps.......`
    },
    {
        id : 3,
        title : 'How to Create a Django Project',
        date : 'Dec 4, 2020',
        description : 'How to Create a Django Project Requirements Python — Get the latest version of Python at https://www.python.org/downloads/ or with your operating system’s package manager. pip — pip is already installed if you are using Python 2 >=2.7.9 or Python 3...',
        text : `# How to Create a Django Project

Status: Completed

## Requirements

---

1. Python - Get the latest version of Python at [https://www.python.org/downloads/](https://www.python.org/downloads/) or with your operating system’s package manager.
2. pip - pip is already installed if you are using Python 2 >=2.7.9 or Python 3 >=3.4 downloaded from [python.org](http://python.org/) or if you are working in a Virtual Environment created by virtualenv or venv. Just make sure to upgrade pip.

# I. Creating Virtual Environment

---

Now **Virtual Environment** is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.

\`\`\`python
python3 -m venv env
\`\`\`

![https://miro.medium.com/max/1640/1*p6ZQIylGFqVqsQqMhFJEVg.png](https://miro.medium.com/max/1640/1*p6ZQIylGFqVqsQqMhFJEVg.png)

# II. Activating Virtual Environment

---

After creating an **Virtual Environment** we need to activate it, in order to get inside it.

\`\`\`jsx
source env/bin/activate
\`\`\`

![How%20to%20Create%20a%20Django%20Project%20a0bd77182d2d497d9898a5057ba48528/Untitled%201.png](https://miro.medium.com/max/1626/1*OoTkqnzowsx2e4ISCEhBoA.png)

# III. Installing Django

---

After getting into an **Virtual Environment,** we can now install Django with a simple pip command.

  

\`\`\`jsx
pip install Django
\`\`\`

![How%20to%20Create%20a%20Django%20Project%20a0bd77182d2d497d9898a5057ba48528/Untitled%202.png](https://miro.medium.com/max/1620/1*-50lIBfVB3PdMqb1VBP4bA.png)

# IV. Creating a Django Project

---

Now we have to create a project where we can start building our website.

\`\`\`python
django-admin startproject <Project's Name>
\`\`\`

![How%20to%20Create%20a%20Django%20Project%20a0bd77182d2d497d9898a5057ba48528/Untitled%203.png](https://miro.medium.com/max/1642/1*bydoURtK-F_knUJIcNN1lg.png)

You'll notice that a new folder named <Project's Name> is created in the same directory as env.

# V. Running the Development Server

---

We'll cd into tutorial directory, where you'll find [manage.py](http://manage.py) and a tutorial directory which is the main app of your Django Project.

![How%20to%20Create%20a%20Django%20Project%20a0bd77182d2d497d9898a5057ba48528/Untitled%204.png](https://miro.medium.com/max/1640/1*K4-Uv3K5uClPnSeJwtBrUQ.png)

In order to run our server, we'll type a simple runserver command.

\`\`\`python
python manage.py runserver
\`\`\`

![How%20to%20Create%20a%20Django%20Project%20a0bd77182d2d497d9898a5057ba48528/Untitled%205.png](https://miro.medium.com/max/1618/1*SK8CZMIWePwG0n34L8DcAQ.png)

This command serves the developer server to the [localhost](http://localhost) at port 8000, which can be accessed by visiting http://127.0.0.1:8000.

Ignore the warning about unapplied database migrations, that'll be removed when you'll further create an app within the project with database necessities. 

`
    }
]