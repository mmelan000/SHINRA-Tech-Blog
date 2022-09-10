const { Blog } = require('../models');

const blogData = [
  {
    blog_title:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    blog_text: 'Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    user_id: 6,
  },
  {
    blog_title: 'Quisque porta volutpat erat.',
    blog_text:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    user_id: 5,
  },
  {
    blog_title: 'Aenean lectus.',
    blog_text:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 6,
  },
  {
    blog_title: 'Phasellus id sapien in sapien iaculis congue.',
    blog_text:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    user_id: 7,
  },
  {
    blog_title: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    blog_text: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    user_id: 1,
  },
  {
    blog_title: 'Nunc nisl.',
    blog_text: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    user_id: 5,
  },
  {
    blog_title: 'Aenean sit amet justo.',
    blog_text:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
  },
  {
    blog_title: 'Ut tellus.',
    blog_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    user_id: 1,
  },
  {
    blog_title: 'Nulla mollis molestie lorem.',
    blog_text:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    user_id: 3,
  },
  {
    blog_title: 'In sagittis dui vel nisl.',
    blog_text: 'Vivamus tortor.',
    user_id: 2,
  },
  {
    blog_title: 'Duis ac nibh.',
    blog_text:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    user_id: 4,
  },
  {
    blog_title:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    blog_text:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 7,
  },
  {
    blog_title: 'Suspendisse ornare consequat lectus.',
    blog_text: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    user_id: 6,
  },
  {
    blog_title: 'Duis bibendum.',
    blog_text:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    user_id: 1,
  },
  {
    blog_title: 'Aenean sit amet justo.',
    blog_text:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 5,
  },
  {
    blog_title:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    blog_text:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3,
  },
  {
    blog_title: 'Aenean fermentum.',
    blog_text: 'Vestibulum rutrum rutrum neque.',
    user_id: 4,
  },
  {
    blog_title: 'Morbi vel lectus in quam fringilla rhoncus.',
    blog_text:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    user_id: 7,
  },
  {
    blog_title: 'Donec dapibus.',
    blog_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 8,
  },
  {
    blog_title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_text: 'In congue.',
    user_id: 3,
  },
  {
    blog_title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_text:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    user_id: 4,
  },
  {
    blog_title:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    blog_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 8,
  },
  {
    blog_title: 'Curabitur in libero ut massa volutpat convallis.',
    blog_text:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    user_id: 2,
  },
  {
    blog_title: 'Sed vel enim sit amet nunc viverra dapibus.',
    blog_text: 'Phasellus sit amet erat. Nulla tempus.',
    user_id: 2,
  },
  {
    blog_title: 'Maecenas ut massa quis augue luctus tincidunt.',
    blog_text: 'Pellentesque at nulla. Suspendisse potenti.',
    user_id: 3,
  },
  {
    blog_title: 'Nulla nisl.',
    blog_text: 'Suspendisse ornare consequat lectus.',
    user_id: 9,
  },
  {
    blog_title: 'Donec dapibus.',
    blog_text:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    user_id: 4,
  },
  {
    blog_title: 'In blandit ultrices enim.',
    blog_text:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    user_id: 6,
  },
  {
    blog_title: 'Aenean sit amet justo.',
    blog_text: 'Aenean sit amet justo. Morbi ut odio.',
    user_id: 2,
  },
  {
    blog_title: 'Fusce consequat.',
    blog_text:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    user_id: 8,
  },
  {
    blog_title: 'Maecenas pulvinar lobortis est.',
    blog_text:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
  },
  {
    blog_title: 'Ut tellus.',
    blog_text:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    user_id: 1,
  },
  {
    blog_title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_text:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    user_id: 2,
  },
  {
    blog_title:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    blog_text: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    user_id: 5,
  },
  {
    blog_title: 'Cras non velit nec nisi vulputate nonummy.',
    blog_text: 'Pellentesque ultrices mattis odio.',
    user_id: 1,
  },
  {
    blog_title:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog_text:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 7,
  },
  {
    blog_title: 'Nulla ac enim.',
    blog_text:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    user_id: 2,
  },
  {
    blog_title: 'Nulla nisl.',
    blog_text: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    user_id: 1,
  },
  {
    blog_title: 'Sed sagittis.',
    blog_text:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    user_id: 8,
  },
  {
    blog_title:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    blog_text:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    user_id: 3,
  },
  {
    blog_title: 'Donec dapibus.',
    blog_text:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    user_id: 6,
  },
  {
    blog_title: 'Quisque ut erat.',
    blog_text:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 8,
  },
  {
    blog_title: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    blog_text:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 1,
  },
  {
    blog_title: 'Mauris lacinia sapien quis libero.',
    blog_text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    user_id: 2,
  },
  {
    blog_title:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    blog_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    user_id: 6,
  },
  {
    blog_title:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    blog_text:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    user_id: 9,
  },
  {
    blog_title: 'Vestibulum rutrum rutrum neque.',
    blog_text:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 4,
  },
  {
    blog_title: 'Nulla facilisi.',
    blog_text: 'Aliquam erat volutpat. In congue. Etiam justo.',
    user_id: 2,
  },
  {
    blog_title: 'Integer non velit.',
    blog_text:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    user_id: 5,
  },
  {
    blog_title: 'Suspendisse potenti.',
    blog_text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    user_id: 3,
  },
  {
    blog_title: 'Donec ut mauris eget massa tempor convallis.',
    blog_text:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    user_id: 9,
  },
  {
    blog_title: 'Integer ac neque.',
    blog_text: 'Cras non velit nec nisi vulputate nonummy.',
    user_id: 3,
  },
  {
    blog_title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    blog_text: 'Pellentesque eget nunc.',
    user_id: 4,
  },
  {
    blog_title: 'Nullam porttitor lacus at turpis.',
    blog_text:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 1,
  },
  {
    blog_title: 'Etiam faucibus cursus urna.',
    blog_text: 'Vivamus in felis eu sapien cursus vestibulum.',
    user_id: 9,
  },
  {
    blog_title: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    blog_text:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    user_id: 1,
  },
  {
    blog_title: 'Suspendisse ornare consequat lectus.',
    blog_text: 'Donec dapibus. Duis at velit eu est congue elementum.',
    user_id: 2,
  },
  {
    blog_title: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    blog_text:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    user_id: 2,
  },
  {
    blog_title:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    blog_text:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 5,
  },
  {
    blog_title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog_text: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
    user_id: 7,
  },
  {
    blog_title: 'Morbi ut odio.',
    blog_text:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    user_id: 2,
  },
  {
    blog_title: 'Integer ac leo.',
    blog_text:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    user_id: 3,
  },
  {
    blog_title: 'Proin eu mi.',
    blog_text: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    user_id: 2,
  },
  {
    blog_title: 'Aliquam non mauris.',
    blog_text:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 7,
  },
  {
    blog_title: 'Nunc purus.',
    blog_text:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    user_id: 6,
  },
  {
    blog_title: 'Proin risus.',
    blog_text: 'Maecenas tincidunt lacus at velit.',
    user_id: 2,
  },
  {
    blog_title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    blog_text: 'Etiam justo.',
    user_id: 3,
  },
  {
    blog_title: 'Praesent id massa id nisl venenatis lacinia.',
    blog_text: 'Etiam justo. Etiam pretium iaculis justo.',
    user_id: 2,
  },
  {
    blog_title: 'Cras pellentesque volutpat dui.',
    blog_text:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    user_id: 8,
  },
  {
    blog_title: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    blog_text:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 3,
  },
  {
    blog_title: 'Proin interdum mauris non ligula pellentesque ultrices.',
    blog_text: 'Ut tellus.',
    user_id: 6,
  },
  {
    blog_title: 'Donec ut dolor.',
    blog_text:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 7,
  },
  {
    blog_title: 'Etiam vel augue.',
    blog_text:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    user_id: 3,
  },
  {
    blog_title:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    blog_text:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    user_id: 1,
  },
  {
    blog_title: 'Nunc rhoncus dui vel sem.',
    blog_text:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    user_id: 8,
  },
  {
    blog_title: 'Etiam justo.',
    blog_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 3,
  },
  {
    blog_title: 'In hac habitasse platea dictumst.',
    blog_text:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 8,
  },
  {
    blog_title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_text:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 3,
  },
  {
    blog_title: 'Sed ante.',
    blog_text:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    user_id: 6,
  },
  {
    blog_title: 'Donec quis orci eget orci vehicula condimentum.',
    blog_text: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
    user_id: 3,
  },
  {
    blog_title: 'Ut at dolor quis odio consequat varius.',
    blog_text: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    user_id: 9,
  },
  {
    blog_title: 'Curabitur in libero ut massa volutpat convallis.',
    blog_text:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    user_id: 7,
  },
  {
    blog_title:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    blog_text: 'Etiam pretium iaculis justo.',
    user_id: 9,
  },
  {
    blog_title: 'Pellentesque eget nunc.',
    blog_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 9,
  },
  {
    blog_title: 'Integer ac leo.',
    blog_text: 'Nunc nisl.',
    user_id: 6,
  },
  {
    blog_title: 'Nunc rhoncus dui vel sem.',
    blog_text: 'Integer tincidunt ante vel ipsum.',
    user_id: 2,
  },
  {
    blog_title:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    blog_text: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    user_id: 7,
  },
  {
    blog_title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_text: 'Nulla facilisi.',
    user_id: 1,
  },
  {
    blog_title:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    blog_text:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    user_id: 8,
  },
  {
    blog_title: 'Integer non velit.',
    blog_text: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    user_id: 7,
  },
  {
    blog_title: 'Integer non velit.',
    blog_text: 'Sed accumsan felis.',
    user_id: 5,
  },
  {
    blog_title:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    blog_text:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    user_id: 6,
  },
  {
    blog_title: 'Nulla mollis molestie lorem.',
    blog_text: 'Morbi porttitor lorem id ligula.',
    user_id: 8,
  },
  {
    blog_title:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog_text: 'Integer ac leo.',
    user_id: 6,
  },
  {
    blog_title: 'Nulla facilisi.',
    blog_text:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    user_id: 9,
  },
  {
    blog_title: 'Duis ac nibh.',
    blog_text: 'Nulla mollis molestie lorem.',
    user_id: 3,
  },
  {
    blog_title:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    blog_text:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 3,
  },
  {
    blog_title: 'Suspendisse potenti.',
    blog_text:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    user_id: 9,
  },
  {
    blog_title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_text:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    user_id: 6,
  },
  {
    blog_title: 'Vestibulum rutrum rutrum neque.',
    blog_text: 'Nulla tempus.',
    user_id: 3,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
