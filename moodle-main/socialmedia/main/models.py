from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator

class University(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


gender = (
    ('male', 'Мужской'),
    ('female', 'Женский')
)


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    bio = models.TextField()
    birth_date = models.DateField()
    address = models.CharField(max_length=256)
    gender = models.CharField(max_length=8,choices=gender)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.user.username


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=256, null=True)
    last_name = models.CharField(max_length=256, null=True)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    major = models.CharField(max_length=255)
    year = models.IntegerField()
    birth_date = models.DateField()
    address = models.CharField(max_length=256)
    gender = models.CharField(max_length=8,choices=gender)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.user.username


class Group(models.Model):
    name = models.CharField(max_length=255)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True)
    students = models.ManyToManyField(Student, related_name='groups')
    curator = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True, related_name='curator_groups')

    def __str__(self):
        return self.name


class InterestClub(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    university = models.ForeignKey(University, on_delete=models.CASCADE)  # Добавлено поле для связи с университетом
    members = models.ManyToManyField(User, related_name='interest_clubs')

    def __str__(self):
        return self.name

class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    interest_club = models.ForeignKey(InterestClub, on_delete=models.CASCADE)
    joined_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.interest_club.name}"

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    students = models.ManyToManyField(Student, related_name='courses')

    def __str__(self):
        return self.title

class Lecture(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    file = models.FileField(upload_to='lectures/')

    def __str__(self):
        return self.title

class AssignmentType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    due_date = models.DateField()
    file = models.FileField(upload_to='assignments/')
    assignment_type = models.ForeignKey(AssignmentType, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    score = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
    feedback = models.TextField()
    is_resubmitted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student.user.username} - {self.assignment.title}"


class TeacherRating(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MaxValueValidator(5)])
    anonymous = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.teacher.user.username} - Rating: {self.rating}"


class StudentRating(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MaxValueValidator(5)])
    anonymous = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student.user.username} - Rating: {self.rating}"

