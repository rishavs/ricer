// var project = new Project('ProjectName');

// project.addAssets('Assets/**');
// project.addSources('Sources');

// project.addLibrary('rice2d');

// resolve(project);

let project = new Project('New Project');
project.addAssets('Assets/**');
project.addShaders('Shaders/**');
project.addSources('Sources');
project.addLibrary('rice2d');
project.addParameter('scripts'); //new
project.addParameter("--macro keep('scripts')"); //new
resolve(project);