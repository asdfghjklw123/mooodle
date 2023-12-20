from django.shortcuts import render

# Create your views here.
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UniversitySerializer, TeacherSerializer, CreateTeacherSerializer, StudentSerializer, CreateStudentSerializer, CreateGroupSerializer, GroupSerializer, CreateInterestClubSerializer, InterestClubSerializer, CreateMembershipSerializer, MembershipSerializer, CourseSerializer, CreateCourseSerializer, CreateAssignmentSerializer, AssignmentSerializer, GradeSerializer, CreateGradeSerializer, LectureSerializer, AssignmentTypeSerializer, CreateTeacherRatingSerializer, TeacherRatingSerializer,CreateStudentRatingSerializer,StudentRatingSerializer
from .models import University, Teacher, Student, Group, InterestClub, Membership, Course, Grade, Assignment, AssignmentType, Lecture, TeacherRating, StudentRating


class IsUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class Logout(APIView):

    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class CreateUniversityView(generics.ListCreateAPIView):
    serializer_class = UniversitySerializer
    queryset = University.objects.all()


class CreateTeacherView(generics.ListCreateAPIView):
    serializer_class = CreateTeacherSerializer
    queryset = Teacher.objects.all()


class DetailTeacherView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()


class CreateStudentView(generics.ListCreateAPIView):
    serializer_class = CreateStudentSerializer
    queryset = Student.objects.all()

    def get_queryset(self):
        queryset = Student.objects.all()
        params = self.request.query_params

        user = params.get('user', None)
        first_name = params.get('first_name', None)
        last_name = params.get('last_name', None)

        if user:
            queryset = queryset.filter(user__id=user)

        if first_name:
            queryset = queryset.filter(first_name__icontains=first_name)

        if last_name:
            queryset = queryset.filter(last_name__icontains=last_name)
        
        return queryset


class DetailStudentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()


class CreateGroupView(generics.ListCreateAPIView):
    serializer_class = CreateGroupSerializer
    queryset = Group.objects.all()


class DetailGroupView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()


class CreateClubView(generics.ListCreateAPIView):
    serializer_class = CreateInterestClubSerializer
    queryset = InterestClub.objects.all()


class DetailClubView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = InterestClubSerializer
    queryset = InterestClub.objects.all()


class CreateMembershipView(generics.ListCreateAPIView):
    serializer_class = CreateMembershipSerializer
    queryset = Membership.objects.all()


class DetailMembershipView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MembershipSerializer
    queryset = Membership.objects.all()


class CreateCourseView(generics.ListCreateAPIView):
    serializer_class = CreateCourseSerializer
    queryset = Course.objects.all()


class DetailCourseView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class CreateLectureView(generics.ListCreateAPIView):
    serializer_class = LectureSerializer
    queryset = Lecture.objects.all()


class CreateAssignmentTypeView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AssignmentTypeSerializer
    queryset = AssignmentType.objects.all()


class CreateAssignmentView(generics.ListCreateAPIView):
    serializer_class = CreateAssignmentSerializer
    queryset = Assignment.objects.all()


class AssignmentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class CreateGradeView(generics.ListCreateAPIView):
    serializer_class = CreateGradeSerializer
    queryset = Grade.objects.all()


class GradeView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GradeSerializer
    queryset = Grade.objects.all()


class CreateTeacherRatingView(generics.ListCreateAPIView):
    serializer_class = CreateTeacherRatingSerializer
    queryset = TeacherRating.objects.all()


class TeacherRatingView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TeacherRatingSerializer
    queryset = TeacherRating.objects.all()


class CreateStudentRatingView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CreateStudentRatingSerializer
    queryset = StudentRating.objects.all()


class StudentRatingView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StudentRatingSerializer
    queryset = StudentRating.objects.all()
