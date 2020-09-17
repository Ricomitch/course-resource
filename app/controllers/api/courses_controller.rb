module Api
  module V1
    class CoursesController < ApplicationController
      # before_action :set_course, only: [:show, :update, :destroy]
    
      # GET /courses
      def index
        courses = Course.all
    
        render json: CourseSerializer.new(courses, options).serialized_json
      end
    
      # GET /courses/1
      def show
        course = Airline.find_by(slug: params[:slug])

        render json: CourseSerializer.new(course, options).serialized_json
      end
    
      # POST /courses
      def create
        course = Course.new(course_params)
        
          if course.save
            render json: CourseSerializer.new(course).serialized_json
          else
            render json: { error: course.errors.messages }, status: 422
        end
      end
    
      # PATCH/PUT /courses/1
      def update
        course = Course.find_by(slug: params[:slug])
        
        if course.update(course_params)
          render json: CourseSerializer.new(course, options).serialized_json
        else
          render json: { error: course.errors.messages }, status: 422
      end
    end
    
      # DELETE /courses/1
      def destroy
        course = Course.find_by(slug: params[:slug])
        
        if course.destroy
          head :no_content
        else
          render json: { error: course.errors.messages }, status: 422
      end
    end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        # def set_course
        #   @course = Course.find(params[:id])
        # end
    
        # Only allow a trusted parameter "white list" through.
        def course_params
      params.require(:course).permit(:name, :image_url)
     end

     def options
           @options || = { includes: %i[reviews] }
     end
    end
  end
end

